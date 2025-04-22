"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./container6.module.css";

const Container6 = () => {
    const url = "http://localhost:4000/avaliacao";

    const [avaliations, setAvaliations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [newAvaliation, setNewAvaliation] = useState({ nome: "", comentario: "", perfil: "" });
    const [postError, setPostError] = useState(null);

    useEffect(() => {
        const fetchAvaliations = async () => {
            try {
                setLoading(true);
                const response = await axios.get(url);
                setAvaliations(response.data);
                setLoading(false);
            } catch (error) {
                console.log("Erro ao buscar as avaliações na API");
                setError("Não foi possível carregar as avaliações. Tente novamente mais tarde.");
                setLoading(false);
            }
        };
        fetchAvaliations();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewAvaliation({ ...newAvaliation, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(url, newAvaliation);
            setAvaliations([...avaliations, response.data]);
            setNewAvaliation({ nome: "", comentario: "", perfil: "" });
            setPostError(null);
        } catch (error) {
            console.log("Erro ao postar a avaliação", error);
            setPostError("Não foi possível enviar a avaliação. Tente novamente mais tarde.");
        }
    };

    if (loading) {
        return (
            <div className={styles.loading}>
                Carregando avaliações...
            </div>
        );
    }

    if (error) {
        return (
            <div className={styles.error}>
                {error}
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Avaliações</h1>

            <div className={styles.avaliationGrid}>
                {avaliations.map((avaliation) => (
                    <div key={avaliation.id} className={styles.avaliationCard}>
                        <div className={styles.imageContainer}>
                            <img
                                src={avaliation.perfil || "https://via.placeholder.com/150"}
                                alt={avaliation.nome || "Imagem não disponível"}
                                className={styles.image}
                            />
                        </div>
                        <div className={styles.content}>
                            <h2 className={styles.avaliationTitle}>{avaliation.nome}</h2>
                            <p className={styles.comment}>{avaliation.comentario}</p>
                            <p className={styles.date}>
                                Criada em: {new Date(avaliation.criadaEm).toLocaleDateString("pt-BR")}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <form className={styles.form} onSubmit={handleSubmit}>
                <h2>Deixe sua avaliação:</h2>
                <input
                    type="text"
                    name="nome"
                    placeholder="Seu nome"
                    value={newAvaliation.nome}
                    onChange={handleInputChange}
                    className={styles.input}
                    required
                />
                <textarea
                    name="comentario"
                    placeholder="Seu comentário"
                    value={newAvaliation.comentario}
                    onChange={handleInputChange}
                    className={styles.textarea}
                    required
                />
                <input
                    type="text"
                    name="perfil"
                    placeholder="Sua foto de perfil (URL)"
                    value={newAvaliation.perfil}
                    onChange={handleInputChange}
                    className={styles.input}
                    required
                />
                <button type="submit" className={styles.button}>
                    Enviar Avaliação
                </button>
                {postError && <p className={styles.error}>{postError}</p>}
            </form>
        </div>
    );
};

export default Container6;