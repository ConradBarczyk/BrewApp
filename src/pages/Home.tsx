import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCol, IonRow, IonGrid, IonLabel} from '@ionic/react';
import React from 'react';
import CurrentTimers from '../components/CurrentTimers';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="warning">
          <IonTitle>BrewTimer</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonContent className="ion-padding">
          <IonGrid>
            <IonRow>
              <IonCol>
                <CurrentTimers />
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default Home;
