export const ButtonStyle = {
  baseStyle: {},
  sizes: {},
  variants: {
    primary: {
      border: '2px',
      borderColor: '#494949',
      bg: '#FCE699',
      boxShadow: 'solid-left',
      outline: 'none',
      fontFamily: 'Jost',
      fontWeight: 200,
      _hover: {
        outline: 'none',
        bg: '#FFE177',
      },

      _focus: {
        outline: 'none',
        bg: '#FCE699',
        boxShadow: 'solid-left',
      },

      _active: {
        boxShadow: '0px 0px 0px 0px',
        top: '3px',
        right: '3px',
        outline: 'none',
        bg: '#FCE699',
      },
    },

    'toogle-xs': {
      size: 'xs',
      outline: 'none',
      height: '0.8vw',
      _hover: {
        bg: '#FFE177',
      },
      _focus: {
        outline: 'none',
        bg: '#FCE699',
      },
    },

    search: {
      size: 'sm',
      outline: 'none',
      width: '65px',
      height: '3vh',
      _focus: {
        outline: 'none',
      },
    },
  },

  defaultProps: {},
};
