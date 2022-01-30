const { AuthenticationError } = require("apollo-server-errors");
const { User, Appointment  } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (root, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).select(
          "-__v -password"
        );
        return userData;
      }
      throw new AuthenticationError("Not logged in");
    },
    appointment: async (parent, { _id }) => {
      const params = _id ? { _id } : {};
      return Appointment.find(params);
    },
   
  },

Mutation: {
    addUser: async (root, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (root, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
      }  ,
 
   },

  addAppointment: async (root, args, context) => {
    
    if (context.user) {
      const newAppointment = await Appointment.create(args);

      await User.findOneAndUpdate(
        { _id: context.user._id },
        { $push: { appointments: newAppointment._id } },
        { new: true }
      );

      return newAppointment;
    }
    throw new AuthenticationError("You need to be logged in!");
  },
 cancelAppointment: async (root, { bookingId }, context) => {
    if (context.user) {
      const deletedAppointment = await Appointment.findOneAndDelete(
          { _id: bookingId}
      );
    
      await User.findOneAndUpdate(
        { _id: context.user._id },
        { $pull: { appointments: deletedAppointment._id } }
      );

      return deletedAppointment;
    }
    throw new AuthenticationError("You need to be logged in!");
  },


};
module.exports = resolvers;