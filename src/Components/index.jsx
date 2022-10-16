import React, { useEffect, useState } from "react";
import axios from "axios";
// import { Container, Foto } from "./style";
import * as S from "./style"

export default function Components() {

    let Api = "https://hp-api.herokuapp.com/api/characters"

    const [personagens, setPersonagens] = useState([])

    useEffect(() => {
        axios.get(Api).then((response) => {
            console.log(response.data.slice(0, 25));
            setPersonagens(response.data.slice(0, 25))
        })
    }, [Api])

    return (

        <S.Container>
            <S.Title id='topo'>Hogwarts</S.Title>

            <S.Personagem>
                {personagens.map((item, index) => (
                    <S.Card>
                        <div key={index}>
                            <S.Foto src={item.image} alt="personagem" />
                            <S.WhoIAm>who i'm?</S.WhoIAm>
                        </div>
                    
                        <S.About className="About">
                            <p>Nice to meet you!</p>
                            <p>I´m {item.actor}</p>
                            <p>I act like {item.name}</p>
                            <p>I´m a {item.ancestry}</p>
                            <p>My house is {item.house}</p>
                            <p>And my patronus is a {item.patronus}</p>
                        </S.About>
                    </S.Card>
                ))}
            </S.Personagem>
        </S.Container>

    )
}