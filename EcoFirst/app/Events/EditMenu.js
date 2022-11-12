import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet, SafeAreaView } from 'react-native'
import { Menu, MenuItem, MenuDivider } from 'react-native-material-menu';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import {
    Provider,
    Button,
    Dialog,
    DialogHeader,
    DialogContent,
    DialogActions,
} from "@react-native-material/core";
import axios from 'axios'
import { Snackbar, ActivityIndicator } from "@react-native-material/core";

export default function EditMenu({ id, navigation }) {
    const [visible, setVisible] = useState(false);
    const [show, setShow] = useState(false);

    const hideMenu = () => setVisible(false);

    const showMenu = () => setVisible(true);

    const handleEditPage = () => {
        navigation.push('Editevent', {
            eventID: id
        })
    }

    const handleDelete = () => {
        axios.delete(`http://192.168.1.15:5000/events/delete/${id}`)
            .then((res) => {
                setShow(false)
                snack()
            }).catch((err) => {
                console.log("error", err)
            })
    }

    const deleteDialog = () => {
        setShow(true)
        setVisible(false)
    }

    const [snackVisible, setSnackVisible] = useState(false)

    const snack = () => {
        setSnackVisible(true)
        setTimeout(() => {
            navigation.push('Home')
        }, 2000);
    }

    return (
        <SafeAreaView style={styles.container} >
            {snackVisible &&
                <View>
                    <ActivityIndicator size="large" style={{ position: "absolute", zIndex: 2000, start: 48, end: 48 }} />
                </View>
            }
            <Menu
                visible={visible}
                anchor={<MaterialIcons onPress={showMenu} name="more-vert" size={24} color="black" />}
                onRequestClose={hideMenu}
            >
                <MenuItem onPress={handleEditPage} >Edit</MenuItem>
                <MenuItem onPress={deleteDialog}>Delete</MenuItem>
            </Menu>
            <Provider>
                <Dialog visible={show} onDismiss={() => setShow(false)} >
                    <DialogHeader title="Are you sure?" />

                    <DialogActions>
                        <Button
                            title="No"
                            compact
                            variant="text"
                            onPress={() => setShow(false)}
                        />
                        <Button
                            title="Yes"
                            compact
                            variant="text"
                            style={{ marginRight: 100 }}
                            onPress={handleDelete}
                        />
                    </DialogActions>
                </Dialog>
            </Provider>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    }
});
