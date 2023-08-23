import { useState } from "react";
import { View ,TextInput, Button, StyleSheet, Modal,Image} from "react-native";
function GoalInput(props){
    const [entertedGoalText,setEnteredGoalText] = useState(''); 
    function goalInputHandler(entertedText) {
        setEnteredGoalText(entertedText)
      };
    function addGoalHandler(){
        props.onAddGoal(entertedGoalText)
        setEnteredGoalText('');
    }
    return(
        <Modal visible={props.visible} animationType='slide'>
        <View style={styles.inputContainer}>
          <Image style={styles.image} source={require('../assets/images/Small-Logo.png')} />
        <TextInput style={styles.textInput} onChangeText={goalInputHandler} placeholder='Your Course Goal' value={entertedGoalText} />
        <View style={styles.buttonContainer}>
          <View style={styles.button}> 
            <Button title="Cancel" onPress={props.onCancel}  color="#f312f2" />
          </View>
          <View style={styles.button }>
            <Button title='Add Goal' onPress={addGoalHandler} color="#b180f0" />
          </View>
        
      
          
        </View>
      </View>
      </Modal>
    )
}

export default GoalInput;
const styles = StyleSheet.create({
    inputContainer: {
        flex:1,
        justifyContent: 'center',
        alignItems:'center',
        padding:16,
        backgroundColor: '#311b6b'
      },
      image:{
        width:100,
        height:100,
        margin:20
      },
    textInput:{
        borderWidth:1,
        borderColor:'#e4d0ff',
        backgroundColor:'#e4d0ff',
        width:'100%',
        borderRadius:6,
        color:'#120438',
        padding:8,
      },
      buttonContainer:{
        marginTop:16,
        flexDirection:'row'
      },
      button:{
        width:100,
        marginHorizontal : 8
      }

})