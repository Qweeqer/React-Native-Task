import { StyleSheet } from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  postsContainer: {
    marginHorizontal: 10,
  },
  cameraContainer: {
    height: '42%',
    marginTop: 32,
    borderColor: '#E8E8E8',
    borderWidth: 1,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#F6F6F6',
  },
  camera: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  snapContainer: {
    borderWidth: 1,
    width: 70,
    height: 70,
    borderRadius: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderColor: 'rgba(255, 255, 255, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerBox: {
    flexDirection: 'row-reverse',
    borderWidth: 1,
    padding: 11,
    paddingTop: 55,
    borderColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'space-around',
  },
  innerBoxText: {
    marginTop: 16,
    fontSize: 17,
    lineHeight: 22,
    color: '#212121',
  },
  innerBoxTextWrap: {
    flex: 2,
    alignItems: 'center',
  },
  photoContainer: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    borderColor: '#fff',
  },
  imageContainer: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  button: {
    marginTop: 40,
    width: '100%',
    padding: 16,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleButton: {
    fontSize: 16,
    lineHeight: 19,
    color: '#ffffff',
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#E8E8E8',
    borderStyle: 'solid',
    borderRadius: 8,
    marginTop: 16,
    paddingLeft: 16,
    height: 40,
    width: '100%',
  },
  cameraText: {
    fontSize: 16,
    lineHeight: 19,
    color: '#BDBDBD',
    marginTop: 10,
  },
});
