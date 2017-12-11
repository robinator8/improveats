export const CardItemStyle = {
  '.header': {
    'NativeBase.Left': {
      'NativeBase.Text': {
        color: '#fff',
        fontSize: 18,
      }
    },
    'NativeBase.Right': {
      'NativeBase.Button': {
        'NativeBase.Icon': {
          fontSize: 30,
          color: '#fff',
          paddingHorizontal: 5,
        },
        alignItems: 'center',
      },
      'NativeBase.Icon': {
        '.star': {
          color: '#fcbd58',
          paddingLeft: 2,
        },
        fontSize: 30,
        color: '#fff',
        paddingHorizontal: 5,
      },
      justifyContent: 'flex-end',
      alignItems: 'center',
      flexDirection: 'row',
    },
    'NativeBase.Text': {
      fontSize: 16,
      fontWeight: platform === 'ios' ? '500' : undefined,
    },
    '.bordered': {
      'NativeBase.Text': {
        color: variables.sTabBarActiveTextColor,
        fontWeight: platform === 'ios' ? '500' : undefined,
      },
      borderBottomWidth: platform === 'ios' ? variables.borderWidth : null,
    },
    borderBottomWidth: null,
    paddingVertical: variables.listItemPadding -5,
    backgroundColor: '#ae263d',
  }
};
