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
  

class Dashboard extends Component { 
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
          </IonApp>
              
              
          );
      }
  }

//   {/* <IonContent>
//                   <IonFab vertical="top" horizontal="end" slot="fixed">
//                     <IonFabButton>
//                       <IonIcon name="add" onClick={this.props.history.push()} ></IonIcon>
//                     </IonFabButton>
//                   </IonFab>
//               </IonContent> */}
 export default Dashboard;