export const GameModeConstants = Object.freeze({
  fieldsConstraints: {
    label: {
      minLength: 3,
      maxLength: 50,
    },
    shortName: {
      minLength: 3,
      maxLength: 32,
      regex: /^[A-Za-z0-9-]*$/,
    },
  },
});
