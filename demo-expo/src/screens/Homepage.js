import React, {useEffect, useState} from "react";
import {Text, View, FlatList, ActivityIndicator, StyleSheet } from "react-native";
import {db, auth} from "../firebase/config";
import PostCard from "../components/PostCard";


function Homepage(props){
const[post, setPost] = useState([]);
const[loading,setLoading] = useState(true);

useEffect(() => {
    auth.onAuthStateChanged(usuario => {
        if(!usuario){
            props.navigation.navigate("Login");
            return;
        }
        else{
            db.collection("posts")
                .orderBy("createdAt", "desc")
                    .onSnapshot(docs => {
                            let posts = [];
                            docs.forEach(doc => {
                                posts.push({
                                    id:doc.id,
                                    data:doc.data()
                                });
                            });
                            setPost(posts);
                            setLoading(false);
                            });
              
        }
                        
                    })
    }, []);

    if(loading){
        return <ActivityIndicator size="large" color= "violet"/>;
    }
        

    return(
        <View style = {styles.contenedor}>
            <Text style= {styles.title}> Home </Text>
            <FlatList 
            data = {post}
                keyExtractor={((item)=> item.id.toString())}
                renderItem={item => 
                <PostCard 
                    post = {item}/>} 
                    navegar = {props.navigation}  />
        </View>
    )
}

 const styles = StyleSheet.create({
  contenedor: {
    flex:1,

  },
  title: {
    fontSize: 24,
  }
});


export default Homepage;

