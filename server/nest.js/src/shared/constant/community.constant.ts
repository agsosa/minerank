export const CommunityConstants = Object.freeze({
  fieldsConstraints: {
    name: {
      minLength: 3,
      maxLength: 36,
    },
    shortName: {
      minLength: 3,
      maxLength: 24,
      regex: /^[A-Za-z0-9-]*$/,
    },
    description: {
      minLength: 10,
      maxLength: 280,
    },
    ip: {
      minLength: 5,
      maxLength: 253,
    },
  },
  limits: {
    perPageCount: 10, // Amount of communities per page
    latestCount: 7, // Amount of latest communitiest to show
  }
});
