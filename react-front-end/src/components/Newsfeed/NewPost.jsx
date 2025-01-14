import React, { useState } from 'react';
import { Segment, Form, Dropdown } from "semantic-ui-react";



export default function NewPostForm({ user, setIsVisibleForm, createNewPost }) {
  
  const [state, setState] = useState({
    user: user && user,
    title: '',
    description: '',
    photo: '',
    topic: 'general'
  });

  const topicValues = ['general', 'question', 'plant hack'];

  const topicOptions = topicValues.map((element) => ({
    key: element,
    text: element,
    value: element
  }));

  const clickHandler = (event, data) => {
    setState((prev) => ({
      ...prev,
      topic: data.value
    }));
  };


  const submitForm = () => {
    createNewPost(user, state.title, state.description, state.photo, state.topic)
    onClose();
  };
  
  const onClose = (event) => {
    setIsVisibleForm(false);
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <Segment raised style={{ backgroundColor: "rgba(225, 205, 48, 0.65)", textShadow: "2px 2px 2px #325036", backgroundImage: "url(https://www.transparenttextures.com/patterns/asfalt-light.png)" }}>
      <Form onSubmit={submitForm} inverted size="large">

        <Form.Field>
          <Form.Input required={true}
            onChange={(e, data) => {
              setState((prev) => ({
                ...prev,
                title: data.value,
              }));
            }} label='Title' placeholder='Enter post title' />
        </Form.Field>
        <Form.Field>
          <Form.TextArea required={true}
            onChange={(e, data) => {
              setState((prev) => ({
                ...prev,
                description: data.value,
              }));
            }} label="Description"
            placeholder="Tell us more about it" />
        </Form.Field>

        <Form.Field>

          <Form.Input onChange={(e, data) => {
            setState((prev) => ({
              ...prev,
              photo: data.value,
            }));
          }} label="Photo" placeholder='Paste you the URL of your photo' />
        </Form.Field>

        <Form.Field>
          <label>Topic of Your Post</label>
          <Dropdown
            placeholder="Select Topic"
            fluid
            selection
            options={topicOptions}
            onChange={clickHandler}
            style={{ textShadow: "none" }}
          />
        </Form.Field>

        <div className="ui buttons">
          <button className="ui button" onClick={onClose} >Cancel</button>
          <div className="or"></div>
          <button type="submit" className="ui positive button" onClick={submitForm} >Save</button>
        </div>

      </Form>
    </Segment>
  );
};
