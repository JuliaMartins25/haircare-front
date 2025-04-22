"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./container6.module.css";

const Container6 = () => {
    const url = "http://localhost:4000/avaliacao";

    const [avaliations, setAvaliations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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
        </div>
    );
};

export default Container6;