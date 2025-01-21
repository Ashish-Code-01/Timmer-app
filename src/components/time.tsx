import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const TimerApp = () => {
    const [milliseconds, setMilliseconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let timer;
        if (isRunning) {
            timer = setInterval(() => {
                setMilliseconds(prevMilliseconds => prevMilliseconds + 10);
            }, 10);
        } else if (!isRunning && milliseconds !== 0) {
            clearInterval(timer);
        }
        return () => clearInterval(timer);
    }, [isRunning, milliseconds]);

    const handleStart = () => setIsRunning(true);
    const handleStop = () => setIsRunning(false);
    const handleReset = () => {
        setIsRunning(false);
        setMilliseconds(0);
    };

    const formatTime = (ms) => {
        const seconds = Math.floor(ms / 1000);
        const hundredths = Math.floor((ms % 1000) / 10);
        return `${seconds}.${hundredths < 10 ? '0' : ''}${hundredths}s`;
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Welcome to Timer App!</Text>
            <Text style={styles.timerText}>{formatTime(milliseconds)}</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={[styles.btn, { backgroundColor: "green" }]} onPress={handleStart}>
                    <Text style={styles.buttonText}>Start</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btn, { backgroundColor: "blue" }]} onPress={handleStop}>
                    <Text style={styles.buttonText}>Stop</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btn, { backgroundColor: "red" }]} onPress={handleReset}>
                    <Text style={styles.buttonText}>Reset</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    timerText: {
        fontSize: 48,
        fontWeight: 'bold',
        marginVertical: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 20,
    },
    buttonText: {
        color: "white",
        textAlign: 'center',
        fontWeight: 'bold',
    },
    btn: {
        paddingHorizontal: 30,
        paddingVertical: 15,
        borderRadius: 8,
        borderColor: 'black',
        borderWidth: 1,
    },
});

export default TimerApp;
