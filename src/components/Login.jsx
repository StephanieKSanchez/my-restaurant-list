import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Button, Form, Input } from 'antd';

const firebaseConfig = {
    apiKey: "AIzaSyDUezQxed7igufBbrebSZI48SEMZeyDe6c",
    authDomain: "my-first-firestore-sks.firebaseapp.com",
    projectId: "my-first-firestore-sks",
    storageBucket: "my-first-firestore-sks.appspot.com",
    messagingSenderId: "140554685749",
    appId: "1:140554685749:web:2dbba50da48904c7c7107c"
  };


export default function Login({setUser}) {
    const handleLogin = ({email, password}) => {
        const app = initializeApp(firebaseConfig); // connect to firebase
        const auth = getAuth(app) // connect to firebase authentication
        // login with Firebase Auth
        signInWithEmailAndPassword(auth, email, password)
            .then(res => setUser(res.user))
            .catch(console.error)
    }
    const handleGoogleLogin = () => {
        const app = initializeApp(firebaseConfig); 
        const auth = getAuth(app)
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
        .then(res => setUser(res.user))
        .catch(console.error)
    }
  return (
    <section style={{ padding: '2em' }}>
      <Form
        onFinish={handleLogin}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        >
        <Form.Item label="Email" name="email"
            rules={[{ required: true, message: 'Please enter a valid email' }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Password" name="password"
            rules={[{ required: true, message: 'Please enter your password' }]}>
          <Input.Password />
        </Form.Item>
        <Form.Item
          wrapperCol={{ span: 16, offset: 8 }}
        >
          <Button type="primary" htmlType="submit">Login</Button>
        </Form.Item>
        <Form.Item
          wrapperCol={{ span: 16, offset: 8 }}
        >
          <Button onClick={handleGoogleLogin} >Google Login</Button>
        </Form.Item>
      </Form>
    </section>
  )
}