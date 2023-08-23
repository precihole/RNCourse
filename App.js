import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput, View, FlatList,Button, TurboModuleRegistry} from 'react-native';
import { useState } from 'react';
import GoalItem from './components/goalItem';
import GoalInput from './components/goalInput';
export default function App() {
  const [modalIsVisible,setModalIsVisible] = useState(false);
  const [courseGoals,setCourseGoals] = useState([]);

  function startAddGoalHandler(){
    setModalIsVisible(true)
  }

  function endAddGoalHandler(){
    setModalIsVisible(false)
  }
  function addGoalHandler(entertedGoalText) {
setCourseGoals((currentCourseGoals)=>
[...currentCourseGoals,{text:entertedGoalText,id:Math.random().toString()},]);
    endAddGoalHandler();
  };
  function deleteGoalHandler(id){
    setCourseGoals(currentCourseGoals=>{
     return currentCourseGoals.filter((goal)=> goal.id !== id);

    })

  }
  return (
    <>
    <StatusBar style='auto' />
    <View style={styles.appContainer}>
      <Button title= 'Add New Goal' color="#5e0acc" onPress={startAddGoalHandler} />
      <GoalInput visible={modalIsVisible} onAddGoal={addGoalHandler} onCancel={endAddGoalHandler}/>
      <View style={styles.goalsContainer}>
        <FlatList data={courseGoals} renderItem={(itemData )=> 
          {
            return <GoalItem text={itemData.item.text} id={itemData.item.id} onDeleteItem= {deleteGoalHandler} />;
          }} 
        alwaysBounceVertical= {false}
        keyExtractor={(item,index)=>{
          return item.id;
        }}

        />
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex:1,
    padding:50,
    paddingHorizontal:16
  },
  goalsContainer:{
    flex:5
  },
  
});
