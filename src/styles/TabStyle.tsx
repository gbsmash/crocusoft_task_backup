import { StyleSheet } from 'react-native';

export const tabStyles = StyleSheet.create({
  icon: {
    width: 20,
    height: 20,
    textAlign: 'center',
  },
  wrap: {
    flex: 1,
  },
  test: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: 'red',
  },
  iconCircle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 6,
    paddingVertical: 6,
    borderRadius: 20,
    width: 30,
    height: 30,
  },
  iconWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    verticalAlign: 'middle',
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    backgroundColor: '#EEEEEE',

  },
  inactiveIcon: {
    backgroundColor: 'white',
  },
  activeIcon: {
    backgroundColor: 'black',
  },
  tabBarItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 40,
    justifyContent: 'space-evenly',
  },
  activeTabBarItem: {},
  inactiveTabBarItem: {},

  labelWrapper: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#EEEEEE',
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    paddingRight: 10,
    verticalAlign: 'middle',
    paddingVertical: 6,
    paddingLeft: 7,
    minHeight: 30,
    marginTop: 3,
    minWidth: 50,
  },
  tabLabel: {
    fontSize: 11,
    fontWeight: 'bold',
    color: 'black',
  },
  tabContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    height: '10%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  shadowStyle: {
    shadowColor: '#000000',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 7,
    elevation: 20,
  },
  tabText: {
    fontSize: 20,
  },
});
