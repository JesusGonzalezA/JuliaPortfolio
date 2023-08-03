"use client";

import { useForm } from "../../hooks/useForm";
import { config } from "../../data/config";
import styles from "./contactme.module.css";

const initialForm = {
    content: ''
};

export default function ContactMe () {
    const [ formValues, handleInputChange ] = useForm( initialForm );
    
    return (
        <div id="contact_me">
            <h2 className={styles.h2}>Contact me</h2>
            <form 
                action={`mailto:${config.email}?subject=hello&body=${formValues.content}`} 
                method="get" encType="text/plain" 
                target="_top"
                className={styles.contactMe}
            >
                <button type="submit">Contact me!</button>
            </form>
        </div>
    )
}