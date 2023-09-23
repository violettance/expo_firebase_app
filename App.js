import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as Analytics from 'expo-firebase-analytics';

export default function App() {


  const item_jeggings = {
    item_id: 'SKU_123',
    item_name: 'jeggings',
    item_category: 'pants',
    item_variant: 'black',
    item_brand: 'Google',
    price: 9.99,
    item_color: 'blue' // The item-scoped custom paramete
  };

  const params3 = {
    currency: 'USD',
    value: 9.99,
    items: [item_jeggings]
  };

  const item_jeggings_quantity = {
    ...item_jeggings,
    quantity: 2
  };

  const params4 = {
    currency: 'USD',
    value: 19.98,
    items: [item_jeggings_quantity]
  };

  const handleButtonClick = () => {
    Analytics.logEvent('view_item', params3);
    console.log("view_item sent", 'view_item', params3)
  };
  const handleAddToCart = () => {
    Analytics.logEvent('add_to_cart', params4);
    console.log("add_to_cart sent", 'add_to_cart', params4)
  };

  const handleSignUp = () => {
    Analytics.logEvent('sign_up', {
      method: 'Google',
    });
    console.log("sign_up sent")
  };

  const handleSelectContent = () => {
    Analytics.logEvent('select_content', {
      content_type: 'product',
      content_id: 'C_12345',
    });
    console.log("select_content sent")
  };


  const handleGoalCompletion = () => {
    Analytics.logEvent('goal_completion', { name: 'newsletter_submit' });
    console.log('goal_completion', { name: 'newsletter_submit' })
  };



  const userRandomID = Math.floor(Math.random() * 100)

  Analytics.setUserProperties("user_id", userRandomID);
  // Analytics.setUserId(userRandomID);

  return (
    <View style={styles.container}>
      {/* <Text>Open ups App.js to start working on your app!</Text> */}
      <div style={styles.group}>
        <Button title="Send sign_up" style={styles.button} onPress={handleSignUp} />
        <Button title="Send view_item" style={styles.button} onPress={handleButtonClick} />
        <Button title="Send select_content" style={styles.button} onPress={handleSelectContent} />
        <Button title="Send add_to_cart" style={styles.button} onPress={handleAddToCart} />
        <Button title="Send goal_completion" style={styles.button} onPress={handleGoalCompletion} />

        <Button title="baska bisey" style={styles.button} onPress={handleGoalCompletion} />

      </div>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: "1rem"
  },
  group: {
    marginTop: "1rem",
    display: "grid",
    gap: "1rem"
  }
});
