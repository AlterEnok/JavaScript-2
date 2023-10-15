export const createCalculator = () => {
  let memory = 0;

  return {
    add: (number) => {
      memory += number;
    },

    dercease: (number) => {
      memory -= number;
    },

    reset: () => {
      memory = 0;
    },

    getMemo: () => {
      return memory;
    },
  };
};
