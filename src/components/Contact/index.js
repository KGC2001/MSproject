// Contact.js

const Contact = () => (
    <section id="contact" className="abo">
      <h2 className="abo">Contact Me</h2>
      <div className="abo">
        <p>Email: kgopi4286@gmail.com</p>
        <p>Phone: +91 7569795942</p>
        <p>Location: Ongole, India</p>
      </div>
      <form className="abo">
        <label htmlFor="message">Message:</label>
        <textarea id="message" placeholder="Type your message here..." />
        <button type="submit">Send</button>
      </form>
    </section>
  )
  
  export default Contact
  