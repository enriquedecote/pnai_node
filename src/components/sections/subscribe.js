/* eslint no-console:0 no-alert:0 */
import React from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import styled from 'styled-components';

const StyledSubscribeSection = styled.section`
  max-width: 600px;
  margin: 0 auto 100px;
  text-align: center;

  @media (max-width: 768px) {
    margin: 0 auto 50px;
  }

  .overline {
    display: block;
    margin-bottom: 20px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 400;

    &:before {
      bottom: 0;
      font-size: var(--fz-sm);
    }

    &:after {
      display: none;
    }
  }

  .title {
    font-size: clamp(40px, 5vw, 60px);
  }

  .email-link {
    ${({ theme }) => theme.mixins.smallButton};
    margin-top: 50px;
  }

  .email-field{
    ${({ theme }) => theme.mixins.textfield};
    margin-top: 50px;
  }
`;

export default class MailChimpForm extends React.Component {
  state = {
        name: null,
        email: null,
  }
  _handleSubmit = async e => {
    e.preventDefault()
    const result = await addToMailchimp(this.state.email)
    this.setState({result: result})
  }
  _handleChange = event => {
    this.setState({ email: event.target.value })
  }

    render() {
        return this.state.result === "success " ? (
          <div>SUCCESS</div>
        ) : this.state.result === "error" ? (
          <div>ERROR</div>
        ) : (
          <StyledSubscribeSection id="subscribe">
            <form onSubmit={this._handleSubmit}>
              <label>
          Number of guests:
              <input onChange = {this._handleChange} type={'email'} autoComplete="email" className={'email-field'} placeholder="A small text input"> </input>
              </label>
              <button
                type="submit"
                className={'email-link'}
                >Subscribe</button>
            </form>
          </StyledSubscribeSection>
        )
    }
}
