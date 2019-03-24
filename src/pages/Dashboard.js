import React, { Component } from 'react';
import {withRouter} from "react-router-dom";
import {
    IonApp,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonFab,
    IonFabButton,
    IonIcon
  } from '@ionic/react';
  import firebase from '../firestore';

class Dashboard extends Component { 
onClick = () => {
        const db = firebase.firestore();
        db.settings({
          timestampsInSnapshots: true
        });
        const userRef = db.collection("users").add({
          fullname: "uggugu",
          email: "niuhiuh"
        });  
}

constructor(props) {
    super(props);
    const db = firebase.firestore();
    this.state= {

    };
    db.collection("users").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`, doc.data());
        });
    });
    // firebase.users().on('value', snapshot => {
    //     const usersObject = snapshot.val();
  
    //     const usersList = Object.keys(usersObject).map(key => ({
    //       ...usersObject[key],
    //       uid: key,
    //     }));
  
    //     this.setState({
    //       users: usersList,
    //       loading: false,
    //     });
    //   });
   
}

      render() {
        return (
          <IonApp>
            <IonContent>
                <IonCard>
                  <IonCardHeader>
                    <IonCardSubtitle>Welcome to Ionic</IonCardSubtitle>
                    <IonCardTitle>Running on React</IonCardTitle>
                  </IonCardHeader>
                </IonCard>
              </IonContent>
               <IonContent>
                   <IonFab vertical="top" horizontal="end" slot="fixed">
                     <IonFabButton>
                       <IonIcon name="add" onClick={this.onClick} ></IonIcon>
                     </IonFabButton>
                   </IonFab>
               </IonContent>
          </IonApp>
              
              
          );
      }
  }


 export default Dashboard;