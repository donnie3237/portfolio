import './contact.scss'
import nodemailer from 'nodemailer'
export default function Contact() {
  async function handleSubmit(event : any){

    const form = event.currentTarget;
    const formData = new FormData(form);
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth:{
        user : 'paradorn3237@gmail.com',
        pass : 'umrdjdmjrdnokyig'
      }
    })
    // Access form values here:
    const type = formData.get('type');
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    const Themessage = {
      from : 'dose',
      to : 'music23408@gmail.com',
      subject : 'dose',
      text: 'hello',
      amp: `<!doctype html>
        <html ⚡4email>
          <head>
            <meta charset="utf-8">
            <style amp4email-boilerplate>body{visibility:hidden}</style>
            <script async src="https://cdn.ampproject.org/v0.js"></script>
            <script async custom-element="amp-anim" src="https://cdn.ampproject.org/v0/amp-anim-0.1.js"></script>
          </head>
          <body>
            <p><b>Hello</b> to myself <amp-img src="https://cldup.com/P0b1bUmEet.png" width="16" height="16"/></p>
            <p>No embedded image attachments in AMP, so here's a linked nyan cat instead:<br/>
              <amp-anim src="https://cldup.com/D72zpdwI-i.gif" width="500" height="350"/></p>
          </body>
        </html>`,
    }
    await transporter.sendEmail(Themessage)
    // Do something with the form values, e.g., send them to a server:
  
    // ... send data to server
  };
  return (
    <div class="contact w-[90vw] bg-white min-h-[500px] mt-10 flex text-blue-950 flex-col md:flex-row">
        <div class="img w-[100%] md:w-[50%] h-[500px] bg-red-600">
          <h1>Hello</h1>
        </div>
        <form class="flex flex-col w-[100%] md:w-[50%] py-10 px-8 text-gray-100" onsubmit={handleSubmit}>
          <label>Topic</label>
          <select name="type" id="" class="select select-bordered w-full" required>
            <option value="job">I have a custom job for you</option>
            <option value="ques">I have a Quesion</option>
            <option value="talk">I wanna talk to you</option>
            <option value="test">I just test this</option>
          </select>
          <label>Name</label>
          <input type="text" class='input input-bordered w-full' id="name" name="name" placeholder='name' required/>
                    <label>Email</label>
          <input type="email" class='input input-bordered w-full' id="email" name="email" required/>
                    <label>Message</label>
          <input type="text" class='input input-bordered w-full' id="lname" name="message" required/>
          <input class="btn" type="submit" value="Submit"/>
        </form>
    </div>
  )
}
