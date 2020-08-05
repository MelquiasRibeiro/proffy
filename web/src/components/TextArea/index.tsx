import React,{TextareaHTMLAttributes} from 'react';
import  './style.css';

interface IputProps extends TextareaHTMLAttributes<HTMLTextAreaElement>{
    label:string;
    name: string;
}

const TextArea: React.FC<IputProps> = ({label,name,...rest}) => {
  return(
    <div className="textarea-block">
    <label htmlFor={name}>{label}</label>
    <textarea id={name} {...rest}/>
    </div>
  );
}

export default TextArea;