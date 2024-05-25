"use client";
import React from "react";
import Styles from "./NotFound.module.css";
import { Alert, Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { NotFoundImage } from "./NotFoundImage";

const NotFound = () => {
    const router = useRouter();

    return (
        <Box className={Styles.main}>
            <NotFoundImage />
            <Box className={Styles.box}>
                <Typography variant="h1">
                    Упс!.. ничего не найдено...
                </Typography>
                <Alert severity="error">
                    Возможно, такой страницы или игры не существует
                </Alert>
                <Button variant="link" onClick={() => router.push("/")}>
                    Вернуться обратно
                </Button>
            </Box>
        </Box>
    );
};

export default NotFound;
