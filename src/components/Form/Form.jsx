import React, {useCallback, useEffect, useState} from 'react';
import './Form.css';
import {useTelegram} from "../../hooks/useTelegram";

const Form = () => {
    const [country, setCountry] = useState('');
    const [street, setStreet] = useState('');
    const [subject, setSubject] = useState('physical');
    const {tlg} = useTelegram();

    const onSendData = useCallback(() => {
        const data = {
            country,
            street,
            subject
        }
        tlg.sendData(JSON.stringify(data));
    }, [country, street, subject])

    useEffect(() => {
        tlg.onEvent('mainButtonClicked', onSendData)
        return () => {
            tlg.offEvent('mainButtonClicked', onSendData)
        }
    }, [onSendData])

    useEffect(() => {
        tlg.MainButton.setParams({
            text: 'Send Data'
        })
    }, [])

    useEffect(() => {
        if(!street || !country) {
            tlg.MainButton.hide();
        } else {
            tlg.MainButton.show();
        }
    }, [country, street])

    const onChangeCountry = (e) => {
        setCountry(e.target.value)
    }

    const onChangeStreet = (e) => {
        setStreet(e.target.value)
    }

    const onChangeSubject = (e) => {
        setSubject(e.target.value)
    }

    return (
        <div className={"form"}>
            <h3>Please, give me your data</h3>
            <input
                className={'input'}
                type="text"
                placeholder={'Country'}
                value={country}
                onChange={onChangeCountry}
            />
            <input
                className={'input'}
                type="text"
                placeholder={'Street'}
                value={street}
                onChange={onChangeStreet}
            />
            <select value={subject} onChange={onChangeSubject} className={'select'}>
                <option value={'physical'}>Physical</option>
                <option value={'legal'}>Legal</option>
            </select>
        </div>
    );
};

export default Form;
