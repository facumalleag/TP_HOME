import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
  root: {
    flex:1,
    position:'relative',
    backgroundColor: '#E5EDDA',
    justifyContent:'space-between',
    //alignItems:'stretch'
    //flexDirection:'column'
  },
  container: {
    flex:1,
    backgroundColor: '#E5EDDA',
    //justifyContent:'space-between',
    flexDirection:'column'
  },
  containerAvoidView: {
    flex:1,
  },
  myHome: {
    color: '#B4CC1E',
    fontFamily: 'Fraunces',
    fontSize: 32,
    lineHeight: 100,
  },
  area_duenios: {
    width: 104,
    height: 47,
    backgroundColor: '#1F4068',
    borderRadius: 60,
  },
  google_login: {
    color: '#B4CC1E',
    width: 390,
    //justifyContent:'center',
    //flexDirection:'column'
  },
  letra_btn_duenios: {
    color: 'white',
    padding: 10,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 2,
    borderColor:'#1F4068',
    backgroundColor:'#EAEAEA',
    padding: 10,
    paddingHorizontal:10,
    borderRadius: 50,
  },
  loginbtn:{
    color: '#099A97',
    fontSize: 15,
    alignSelf: 'center',
    borderWidth: 2,
    borderColor:'#099A97',
    padding: 10,
    width:200,
    textAlign:'center',
    paddingHorizontal:10,
    borderRadius: 20,
  },
  registro_input: {
    height: 50,
    margin: 12,
    borderWidth: 2,
    borderColor:'#1F4068',
    backgroundColor:'#EAEAEA',
    padding: 10,
    paddingHorizontal:10,
    borderRadius: 20,
  },
  registrobtn:{
    color: '#FFF',
    fontSize: 15,
    alignSelf: 'center',
    borderWidth: 2,
    borderColor:'#099A97',
    backgroundColor:'#099A97',
    padding: 10,
    width:200,
    textAlign:'center',
    paddingHorizontal:10,
    borderRadius: 10,
  },
});
