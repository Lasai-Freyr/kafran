<template>
  <div class="about">
    <h1>Envoyez nous un message</h1>
     <div class="container my-4">
        <form @submit.prevent="sendEmail" class="my-5">
          <label>Nom</label>
          <input 
            type="text" 
            name="name"
            placeholder="Votre nom"
            required
          >
          <label>Email</label>
          <input 
            type="email"
            name="email"
            placeholder="votre adresse mail"
            required
            >
          <label>Message</label>
          <textarea 
            name="message"
            cols="30" rows="5"
            placeholder="Message">
          </textarea>
          
          <input type="submit" value="Send">
        </form>
    </div>
  </div>
</template>

<style scoped>
* {box-sizing: border-box;}

.container {
  display: block;
  margin:auto;
  text-align: center;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  width: 50%;
}

label {
  float: left;
}

input[type=text], [type=email], textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

input[type=submit] {
  background-color: #4CAF50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}
</style>

<script>
import emailjs from 'emailjs-com';


export default {
  methods: {
    sendEmail: (e) => {
      emailjs.sendForm('service_sh486vb', 'template_kkzh2tj', e.target, 'user_gRhV151DSGOCe3PIcndSp')
        .then((result) => {
            console.log('SUCCESS!', result.status, result.text);
        }, (error) => {
            console.log('FAILED...', error);
        });
    }
  }
}
</script>