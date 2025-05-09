import { ChangeEvent, FormEvent, useState } from 'react';
import './styles/temp.css';

export function MainPage() {
  // state hooks
  const [apiUrl, setApiUrl] = useState('');
  const [httpVerb, setHttpVerb] = useState('');
  const [requestText, setRequestText] = useState('');
  const [responseText, setResponseText] = useState('');

  // handler functions
  function handleApiUrlChange(e: ChangeEvent<HTMLInputElement>): void {
    const value = e.target.value;
    console.log(value);
    setApiUrl(value);
  }

  function handleHttpVerbChange(e: ChangeEvent<HTMLSelectElement>): void {
    const value = e.target.value;
    console.log(value);
    setHttpVerb(value);
  }

  function handleRequestTextChange(e: ChangeEvent<HTMLTextAreaElement>): void {
    const value = e.target.value;
    console.log(value);
    setRequestText(value);
  }

  // api interaction
  function sendRequest(
    apiUrl: string,
    httpVerb: string,
    requestBody: string,
  ): void {
    // handle...
    setResponseText('Your request has been received!');
  }

  // document structure
  return (
    <div className="container">
      <h1>Hello</h1>

      {/* settings */}
      <div className="settings">
        {/* http verb */}
        <label htmlFor="http-verb">Select an HTTP verb: </label>
        <select
          name="method-selector"
          id="method-selector"
          value={httpVerb}
          onChange={(e) => handleHttpVerbChange(e)}
        >
          <option value="">Please select a value</option>
          <option value="post">POST</option>
          <option value="get">GET</option>
          <option value="patch">PATCH</option>
          <option value="delete">DELETE</option>
        </select>

        {/* url of the api */}
        <label htmlFor="api-url">API URL: </label>
        <input
          type="text"
          name="api-url"
          id="api-url-input"
          value={apiUrl}
          onChange={(e) => handleApiUrlChange(e)}
        />
      </div>

      <div>
        {/* display */}
        <div className="split-vertical">
          <textarea
            placeholder="Your request"
            value={requestText}
            onChange={(e) => handleRequestTextChange(e)}
          ></textarea>
          <textarea
            placeholder="API response"
            value={responseText || ""}
            onChange={undefined}
          ></textarea>
        </div>

        {/* controls */}
        <button onClick={() => sendRequest(apiUrl, httpVerb, requestText)}>
          Send
        </button>
      </div>
    </div>
  );
}
