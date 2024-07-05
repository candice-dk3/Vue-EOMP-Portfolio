<template>
  <section id="contact">
      <div class="imgContact">
        <img :src="imgUrlContact" alt=""/>
        <section class="inner-contact-sec">
          <h1 class="contact-h1">interested? let's get in touch</h1>
          <div class="full-contact-me">
            <div class="row">
              <div class="container landing-container">
                <div class="row p-5 d-block d-md-flex align-items-center">
                  <div class="col-6">
                    <div class="form">
                      <form action="https://formspree.io/f/xzbnybjb" method="POST" class="formal" target="_blank">
                        <div class="form-group1">
                          <input type="text" name="name" placeholder="Full-Name" autocomplete="off" required/>
                        </div>
                        <div class="form-group1">
                          <input type="text" name="Email" placeholder="example@gmail.com" autocomplete="off" required/>
                        </div>
                        <div class="form-group1">
                          <input type="text" name="phone-number" placeholder="012 345 6789"  autocomplete="off" required/>
                        </div>
                        <div class="input form-group">
                          <textarea rows="9" cols="50" name="message" placeholder="Your message" autocomplete="off" required class="textarea"></textarea>
                        </div>
                        <div class="form-group d-flex justify-content-around">
                          <button class="btn btn-success" type="submit">Send</button>
                          <button class="btn btn-success" type="reset">Clear</button>
                        </div>
                      </form>
                    </div>
                  </div>
              <div class="col-3" id="contact-me">
                <div class="hTCM">
                  <div class="phone-number">
                    <img :src="imgUrlPhoneNumber" alt=""/>
                  </div>
                  <br>
                  <br>
                  <div class="email">
                    <img :src="imgUrlEmail" alt=""/>
                  </div>
                  <br>
                  <br>
                  <div class="location">
                    <img :src="imgUrlLocation" alt=""/>
                  </div>
                </div>
              </div>
              <div class="col-3">
                <div class="contact-dets">
                  <p>+27 81 314 0839</p>
                  <br>
                  <br>
                  <p>candicekeet3@gmail.com</p>
                  <br>
                  <br>
                  <p>Cape Town, South Africa</p>
                </div>
              </div>
            </div>
          </div>
          </div>
          </div>
        </section>
      </div>
  </section>
</template>
<script>
export default {
    data(){
    return{
      imgUrlContact: 'https://github.com/candice-dk3/vueProjectImages/blob/main/Contact-Page.png?raw=true',
      imgUrlPhoneNumber: 'https://github.com/candice-dk3/vueProjectImages/blob/main/phone-logo%201.png?raw=true',
      imgUrlEmail: 'https://github.com/candice-dk3/vueProjectImages/blob/main/email-logo%201.png?raw=true',
      imgUrlLocation: 'https://github.com/candice-dk3/vueProjectImages/blob/main/location-logo%201.png?raw=true'
    }
  }
}
</script>
<style>
.imgContact{
  margin-top: 360px;
} 

.inner-contact-sec{
  position: absolute;
  top: 969%;
  width: 100%;
}

.contact-h1{
  color: white;
  text-align: center;
  font-size: 48px;
  margin-bottom: 60px;
}

.full-contact-me{
  background-color: rgb(255, 245, 0, 21%);
  border-radius: 120px;
  width: 1200px;
  height: 700px;
  margin-left: 160px;
  margin-top: 60px;
}

.form{
  margin-top: 10px;
  margin-left: 40px;
  border: none;
}

.form-group1{
  margin-top: 20px;
  margin-left: 40px;
  margin-bottom: 10px;
  height: 55px;
  border: none;
}

input {
  border-radius: 20px;
  width: 550px;
  background-color: rgb(255, 245, 0, 21%);
  color: white;
  border: none;
}
textarea {
  background-color: rgb(255, 245, 0, 21%);
  border-radius: 30px;
  border: none;
}

button.btn.btn-success{
  color: rgba(255, 247, 0, 0.519);
  font-size: 18px;
  background-color: black;
  border: none;
}
button.btn.btn-success:hover{
  color: white;
  background-color: rgb(255, 245, 0, 21%);
  border: none;
}

.hTCM{
  color: white;
  margin-left: 190px;
  margin-top: 20px;
}

.phone-number{
  width: 60px;
  height: 40px;
  margin-right: 50px;
  transition: transform 0.4s ease;
}
.phone-number:hover{
  transform: scale(1.2);
}

.email{
  width: 60px;
  height: 40px;
  margin-right: 50px;
  transition: transform 0.4s ease;
}
.email:hover{
  transform: scale(1.2);
}

.location{
  width: 60px;
  height: 40px;
  margin-right: 50px;
  transition: transform 0.4s ease; 
}
.location:hover{
  transform: scale(1.2);
}
.contact-dets{
  color: white;
}

</style>