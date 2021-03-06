import React, { Component } from 'react';
import Button from 'rs-button';
import Sweet from '../src/index.js';

export default class Example extends Component {
    onPrompt(info) {
        Sweet.prompt(info, (text) => {
            console.log(text);
        });
    }

    render() {
        return (
            <Button
                onClick={this.onPrompt.bind(this, {
                    title:'好吧',
                    text: '写点什么呗',
                    inputPlaceholder: '测试',
                    value: '123'
                })}
            >
                prompt
            </Button>
        );
    }
}; 
