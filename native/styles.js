import { StyleSheet } from 'react-native'


/**
 * Used on siple flex views.
 */
const views = StyleSheet.create({
    flex1: {
        flex: 1
    },
    flex2: {
        flex: 2
    },
    buttonView: {
        position:'absolute',
        bottom:0,
        width:'100%'
    }
})

/**
 * Simple button styles.
 */
const button = StyleSheet.create({
    closeColor: {
        backgroundColor: '#767676'
    },
    successColor: {
        backgroundColor: '#21ba45'
    },
    failColor: {
        backgroundColor:"#db2828"
    },
    white: {
        backgroundColor: '#ffffff'
    }
})

/**
 * Simple icon styles.
 */
const icons = StyleSheet.create({
    whiteColor: {
        color: '#ffffff'
    }
})


/**
 * Routes.js styling.
 */
const routes = StyleSheet.create({
    navBar: {
        backgroundColor:'#1b1c1d',
    },
    title: {
        fontWeight:'500',
        fontSize: 24,
        marginTop: 5,
        marginBottom: 5,
        alignSelf:'center',
        color: '#fff',
    },
    color: {
        color: '#fff'
    }
})

/**
 * NavFooter.js
 */
const navFooter = StyleSheet.create({
    footerTab: {
        backgroundColor: '#1b1c1d'
    },
    button: {
        backgroundColor: '#1b1c1d'
    },
})

/**
 * DefaultHeader.js
 */
const modalHead = StyleSheet.create({
    head: {
        backgroundColor:'#1b1c1d'
    }
})

/**
 * HomeComponent.js
 */
const homeComp = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    welcome: {
        fontSize: 25,
        textAlign: 'center',
        marginBottom: 10,
        marginLeft: 15,
        marginRight: 15
    },
    group: {
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 50,
        marginLeft: 15,
        marginRight: 15
    },
    message: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 50,
        marginLeft: 15,
        marginRight: 15
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 10,
        marginLeft: 15,
        marginRight: 15
    },

    runBy: {
        textAlign: 'center',
        color: '#333333',
        fontWeight: 'bold',
        marginBottom: 10,
        marginLeft: 15,
        marginRight: 15
    }
})

/**
 * DeleteModal.js
 */
const deleteMod = StyleSheet.create({
    outerView: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    delLabel: {
        fontSize: 30
    },
    titleLabel: {
        fontSize:20,
        fontWeight:'bold',
        paddingTop:20
    }
})

/**
 * Note.js
 */
const noteStyle = StyleSheet.create({
    titleStyle: {
        fontSize:21,
    },
    dateStyle: {
        color:'#999999'
    },
    closeButton: {
        backgroundColor:"#db2828",
        paddingRight:4
    },
    createButton: {
        backgroundColor:'#767676',
        marginLeft:-1,
    }
})

/**
 * NoteContainer.js
 */
const noteCont = StyleSheet.create({
    outerView: {
        flex:1,
        backgroundColor:"white"
    },
    endText: {
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
        textAlign: 'center',
        fontSize: 25,
        color:'#999999',
        marginBottom:25,
        marginTop:30,

    }
})

/**
 * ViewNoteModal.js
 */
const noteVwMod = StyleSheet.create({
    contentStyle: {
        fontSize:18,
        paddingLeft:25,
        paddingRight:25,
        paddingTop:10,
        paddingBottom:50,
    },
    dateStyle: {
        fontSize:12,
        color:'#999999',
        paddingRight:25,
        paddingTop:10,
        paddingBottom:10,
    },
    titleStyle:{
        fontWeight:'bold',
        fontSize:24,
        paddingLeft:25,
        paddingBottom:10,
        paddingTop:10,

    },
    borderStyle:{
        borderBottomColor: '#999999',
        borderBottomWidth: 1,
    }
})

/**
 * NewNoteModal.js
 */
const noteNewMod = StyleSheet.create({
    view: {
        flex: 1,
        marginTop: 7,
        marginLeft: 7,
        marginRight: 7,
        backgroundColor: "#f5fcff"
    },
    addButtonView: {
        position:'absolute',
        bottom:0,
        width:'100%'
    },
    noteContent: {
        height: 200,
        textAlignVertical: 'top',
    },
    addButton: {
        backgroundColor: "#21ba45"
    },
    addText: {
        fontSize: 20
    }
})

/**
 * Event.js
 */
const eventStyle = StyleSheet.create({
    outerList: {
        marginTop: 10
    },
    titleStyle: {
        fontSize:19,
    },

    whereStyle: {
        fontSize:16,
    },

    dateStyle: {
        color:'#999999',
    },
    closeButton: {
        backgroundColor:"#db2828",
        paddingRight:4
    },
    createButton: {
        backgroundColor:'#767676',
        marginLeft:-1
    }
})

const eventCont = StyleSheet.create({
    outerView: {
        flex:1,
        backgroundColor:"white"
    },
    contView: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 10
    },
    endText: {
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
        textAlign: 'center',
        fontSize: 25,
        color:'#999999',
        marginBottom:25,
        marginTop:30,

    },
    dateText: {
        fontSize: 23
    }
})

/**
 * CreateEvent.js and EditModal.js
 */
const eventMod = StyleSheet.create({
    datePick: {
        width: 200
    }
})

/**
 * Todo.js
 */
const todoStyle = StyleSheet.create({
    todo: {
        justifyContent : 'center',
        alignItems: 'center',
        marginTop: 20
    },
    star: {
        color:'#fbbd08',
        marginLeft: 18,
        marginTop: 15
    },
    col: {
        marginRight: 10,
    },
    todoText: {
        fontSize: 21,
        paddingBottom: 2
    },
    closeButton: {
        backgroundColor:"#db2828",
        paddingRight:4
    },
    createButton: {
        backgroundColor:'#767676',
        marginLeft:-1
    }
})

const modalButtons = StyleSheet.create({
	text: {
		color:'white',
		fontWeight:'bold'
	},

	save: {
		backgroundColor:'#21BA45',
		flex:1,
		justifyContent:'center',
		alignItems:'center',
		height:'100%'
	},

	close: {
		backgroundColor:'#767676',
		flex:1,
		justifyContent:'center',
		alignItems:'center',
		height:'100%'
	},

    delete: {
		backgroundColor:'#db2828',
		flex:1,
		justifyContent:'center',
		alignItems:'center',
		height:'100%'
    },

	view: {
		position:'absolute',
		bottom: 0,
		height:50,
		justifyContent:'center',
		width: '100%'
    },

    flexView: {
	    flex:1,
        flexDirection:'column',
        justifyContent:'center'
	},

	multiLineInput: {
	    height:500,
        textAlignVertical: 'top'
    }

})

/**
 * TodoContainer.js
 */
const todoCont = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor:"white"
    },
    endText: {
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
        textAlign: 'center',
        fontSize: 25,
        color:'#999999',
        marginBottom:25,
        marginTop:30,
    }
})

/**
 * NewTodoModal.js
 */
const todoNewMod = StyleSheet.create({
    view: {
        flex: 1,
        marginTop: 7,
        marginLeft: 7,
        marginRight: 7,
        backgroundColor: "#f5fcff"
    },
    addText: {
        fontSize: 20
    }
})


export { views, button, deleteMod, icons,
         navFooter, routes, homeComp, modalHead,
         noteStyle, noteCont, noteVwMod, noteNewMod,
         eventStyle, eventCont, eventMod,
         todoStyle, todoCont, todoNewMod, modalButtons }
