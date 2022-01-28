import React from 'react';
import stl from './Contact.module.css'

export const Contact = () => {
  return (
    <section className={stl.contactBlock} id='contact'>
      <div className={stl.container}>
        <div className={stl.header}>
          <h2>Get in touch</h2>
          <p>Feel free to get in touch with me. I am always open to discussing, new projects or creative ideas.</p>
        </div>
        <div className={stl.mainBlock}>
          <div className={stl.contacts}>
            <div>Address: City, street, building</div>
            <div>Call me: 88888888</div>
            <div>Mail me: efrrgrggt@ggg.ee</div>
            <div>Telegram: bbgfdbg</div>
            <div>GitHub: gdfgddfggd</div>
            <div>linkedin: fhgfhf</div>
          </div>

          <form
            className={stl.form}
            onSubmit={(e) => {
              e.preventDefault()
            }}>
            <input
              className={stl.formInput}
              type="text"
              placeholder="YOUR MAME"
            />
            <input
              className={stl.formInput}
              type="email"
              placeholder="YOUR EMAIL"
            />
            <input
              className={stl.formInput}
              type="text"
              placeholder="SUBJECT"
            />
            <textarea className={stl.formTextarea} placeholder='MESSAGE'/>
            <button>Send message</button>
          </form>

        </div>
      </div>
    </section>
  );
};
