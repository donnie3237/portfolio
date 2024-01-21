import './contact.scss'
import axios from 'axios'
import { createSignal } from "solid-js";

export default function Contact({}:any){
  const [type, setType] = createSignal('job')
  const [text, setText] = createSignal('')
  const [name, setName] = createSignal('')
  const [email, setEmail] = createSignal('')
  const [message, setMessage] = createSignal('')
  const [sending, setSending] = createSignal(false)
  
  const headers = {
    "Content-Type": "application/json",
    "x-api-key": "3237"
  };

  async function submit() {
    if (name() !== '' && email() !== '' && message() !== '') {
      await setSending(true)
      await axios.post('https://doseserver.vercel.app/mail', {
        type: type(),
        name: name(),
        email: email(),
        message: message()
      } , {headers})
      setType('')
      setMessage('')
      setName('')
      setEmail('')
      setText('Thankyou i will send message to you later')
      const modal : any = document.getElementById('my_modal_5')
      modal.showModal()
      setSending(false)
    }else{
      setText('.......')
      const modal : any = document.getElementById('my_modal_5')
      modal.showModal()
      setSending(false)
    }
  }

  return (
    <div class="contact w-[90vw] bg-white h-[100%] md:h-[500px] min-h-[500px] mt-4 flex text-blue-950 flex-col md:flex-row">
      <div class="img w-[100%] md:w-[50%] md:h-full h-[250px] bg-red-600">
      <dialog id="my_modal_5" class="modal modal-bottom sm:modal-middle">
        <div class="modal-box bg-primary text-white">
          <h1 class="font-bold text-lg">Notice</h1>
          <p class="py-4">{text()}</p>
          <div class="modal-action">
            <form method="dialog">
              <button class="bg-secondary rounded-md text-white px-5 py-2">Close</button>
            </form>
          </div>
        </div>
      </dialog>
      </div>
      <div class="flex flex-col w-[100%] md:w-[50%] py-10 px-8 text-gray-100">
        <label for="topic">Topic</label>
        <select name="type" id="topic" class="w-full" value={type()} required onInput={(e) => setType(e.target.value)}>
          <option value="" selected disabled hidden aria-label="type">Choose topic</option>
          <option value="job">I have a custom job for you</option>
          <option value="ques">I have a Quesion</option>
          <option value="talk">I wanna talk to you</option>
          <option value="test">I just test this</option>
        </select>
        <label for="name">Name</label>
        <input type="text" class='w-full' id="name" name="name" placeholder='name' required value={name()} onInput={(e) => { setName(e.target.value) }} />
        <label for="email">Email</label>
        <input type="email" class='w-full' id="email" name="email" required value={email()} onInput={(e) => { setEmail(e.target.value) }} placeholder='email' />
        <label for="message">Message</label>
        <input type="text" class='w-full' id="message" name="message" required value={message()} onInput={(e) => { setMessage(e.target.value) }} placeholder='message' />
        <button class="btn text-white" onclick={submit} disabled={sending()}>{sending()? "sending..." : "send"}</button>
      </div>
    </div>
  )
}
