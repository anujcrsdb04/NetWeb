import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  StatusBar,
  Image,
} from 'react-native';
import check from './check.png'
import leftarrow from './left-arrow.png'
import rightarrow from './right-arrow.png'
const data = [
  {
    title: 'HomeOwner',
    des1: 'Receive competing quotes',
    des2: 'All reviews written by bidnii users after project completion',
    des3: 'Receive competing quotes',
    images: require('./img.jpg'),
  },
  {
    title: 'Relator',
    des1: 'Receive competing quotes',
    des2: 'All reviews written by bidnii users after project completion',
    des3: 'Receive competing quotes',
    images: require('./img.jpg'),
  },
  {
    title: 'Contractor',
    des1: 'Receive competing quotes',
    des2: 'All reviews written by bidnii users after project completion',
    des3: 'Leads are always free',
    images: require('./img.jpg'),
  },
];
const OnboardingScreen = ({navigation}) => {
  const [currentindex, setcurrentindex] = React.useState(0);
  const onnextcleck = () => {
    setcurrentindex(currentindex + 1);
  };
  const prevclick = () => {
    if(currentindex === 0)
    {
      alert('First value')
    }
    else{
      setcurrentindex(currentindex - 1);
    }
  };
  const nextclick = () => {
    if(currentindex === 2)
    {
      alert('last value')
    }
    else{
      setcurrentindex(currentindex + 1);
    }
  };
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <View style={styles.header}>
        <Text style={{fontSize: 50, fontWeight: 'bold'}}>bidmii</Text>
      </View>
      <View style={styles.heading}>
        <Text style={{fontSize: 25}}>CHOOSE YOUR ROLE</Text>
      </View>
      <View
        style={[
          styles.footer,
          {
            backgroundColor: '#fff',
          },
        ]}>
        <Image
          source={data[currentindex].images}
          style={{height: '60%', width: '100%'}}
        />
        <View style={styles.containermain}>
          <View
            style={[
              styles.header,
              {
                flexDirection: 'row',
                justifyContent: 'space-between',
                height: 50,
                borderBottomWidth:0,
                paddingHorizontal:10
              },
            ]}>
              
             <TouchableOpacity onPress={()=> prevclick()}><Image
          source={leftarrow}
          style={{height: 20, width: 30}}
        /></TouchableOpacity> 
            <Text style={{fontSize:24}}>{data[currentindex].title}</Text>
            <TouchableOpacity onPress={()=> nextclick()}><Image
          source={rightarrow}
          style={{height: 20, width: 30}}
        /></TouchableOpacity>
          </View>
          <View
            style={[
              styles.header,
              {
                flexDirection: 'row',
                height: 50,
                borderBottomWidth:0,
                paddingHorizontal:20,
                justifyContent:'flex-start'
              },
            ]}>
              <Image
          source={check}
          style={{height: 30, width: 30}}
        />
            <Text style={{fontSize:15,marginLeft:10}}>{data[currentindex].des1}</Text>
           
          </View>
          <View
            style={[
              styles.header,
              {
                flexDirection: 'row',
                height: 50,
                borderBottomWidth:0,
                paddingHorizontal:20,
                justifyContent:'flex-start'
              },
            ]}>
              <Image
          source={check}
          style={{height: 30, width: 30}}
        />
            <Text style={{fontSize:15,marginLeft:10}}>{data[currentindex].des2}</Text>
           
          </View>
          <View
            style={[
              styles.header,
              {
                flexDirection: 'row',
                height: 40,
                borderBottomWidth:0,
                paddingHorizontal:20,
                justifyContent:'flex-start'
              },
            ]}>
              <Image
          source={check}
          style={{height: 30, width: 30}}
        />
            <Text style={{fontSize:15,marginLeft:10}}>{data[currentindex].des3}</Text>
           
          </View>{data[currentindex].title === 'Contractor' ? <TouchableOpacity onPress={()=> alert('')}  style={styles.buttonstyle2}><Text  style={styles.textstyle}>I AM A CONTRACTER</Text>
            </TouchableOpacity>:<TouchableOpacity onPress={()=> alert('')}  style={styles.buttonstyle2}><Text  style={styles.textstyle}>CREATE PROJECTS</Text>
            </TouchableOpacity>}
          
        </View>
      </View>
      <View style={styles.indicaters}>
        <View
          style={[
            styles.indicaterview,
            {
              backgroundColor: currentindex == 0 ? '#000' : '#bbb',
            },
          ]}></View>
        <View
          style={[
            styles.indicaterview,
            {
              backgroundColor: currentindex == 1 ? '#000' : '#bbb',
            },
          ]}></View>
        <View
          style={[
            styles.indicaterview,
            {
              backgroundColor: currentindex == 2 ? '#000' : '#bbb',
            },
          ]}></View>
      </View>
    </View>
  );
};

export default OnboardingScreen;

const {height} = Dimensions.get('screen');
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#000',
    borderBottomWidth: 2,
  },
  heading: {
    height: '8%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    backgroundColor: '#fff',
    width: '80%',
    alignSelf: 'center',
    height: '69%',
  },
  logo: {
    width: height_logo,
    height: height_logo,
  },
  title: {
    color: '#05375a',
    fontSize: 30,
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
  },
  text: {
    color: '#000',
    marginTop: 10,
    textAlign: 'center',
    lineHeight: 30,
    fontSize: 18,
    fontFamily: 'Poppins-Light',
  },
  button: {
    justifyContent: 'space-between',
    marginTop: 30,
    flexDirection: 'row',
  },
  indicaters: {
    justifyContent: 'center',
    marginTop: 40,
    flexDirection: 'row',
  },
  signIn: {
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row',
  },
  textSign: {
    color: 'white',
    fontWeight: 'bold',
  },
  buttonstyle: {
    backgroundColor: '#33093b',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 30,
    marginTop: 30,
  },
  buttonstyle2: {
    backgroundColor: '#eee',
    paddingHorizontal: 35,
    paddingVertical: 10,
    borderRadius: 30,
    alignSelf: 'center',
    marginTop: 30,
  },
  textstyle: {
    color: '#000',
    fontSize: 18,
    fontFamily: 'Poppins-Light',
  },
  indicaterview: {
    padding: 5,
    backgroundColor: '#fff',
    marginLeft: 10,
    borderRadius: 10,
    marginTop: 30,
  },
  containermain: {
    height: '50%',
    width: '100%',
    backgroundColor: '#fff',
    borderColor:'#bbb',
    borderWidth:1,
    shadowColor: '#000000',
    shadowOffset: { width: 10, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 3,
  },
});
