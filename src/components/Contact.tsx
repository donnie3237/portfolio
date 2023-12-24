import './contact.scss'
import nodemailer from 'nodemailer'
import axios from 'axios'
import { createSignal, createResource, Suspense } from "solid-js";

export default function Contact() {
  const [type, setType] = createSignal('job')
  const [name, setName] = createSignal('')
  const [email, setEmail] = createSignal('')
  const [message, setMessage] = createSignal('')

  async function submit() {
    await axios.post('https://doseserver.vercel.app/mail', {
      type: type(),
      name: name(),
      email: email(),
      message: message()
    })
    setType('')
    setMessage('')
    setName('')
    setEmail('')
  }
  return (
    <div class="contact w-[90vw] bg-white h-[100%] md:h-[500px] min-h-[500px] mt-4 flex text-blue-950 flex-col md:flex-row">
      <div class="img w-[100%] md:w-[50%] md:h-full h-[250px] bg-red-600">
      </div>
      <div class="flex flex-col w-[100%] md:w-[50%] py-10 px-8 text-gray-100" onsubmit={submit}>
        <label>Topic</label>
        <select name="type" id="" class="select select-bordered w-full" value={type()} required onInput={(e) => setType(e.target.value)}>
        <option value="" selected disabled hidden>Choose topic</option>
          <option value="job">I have a custom job for you</option>
          <option value="ques">I have a Quesion</option>
          <option value="talk">I wanna talk to you</option>
          <option value="test">I just test this</option>
        </select>
        <label>Name</label>
        <input type="text" class='input input-bordered w-full' id="name" name="name" placeholder='name' required value={name()} onInput={(e) => { setName(e.target.value) }} />
        <label>Email</label>
        <input type="email" class='input input-bordered w-full' id="email" name="email" required value={email()} onInput={(e) => { setEmail(e.target.value) }} placeholder='email' />
        <label>Message</label>
        <input type="text" class='input input-bordered w-full' id="lname" name="message" required value={message()} onInput={(e) => { setMessage(e.target.value) }} placeholder='message'/>
        <button class="btn" onclick={submit}>Send</button>
      </div>
    </div>
  )
}
