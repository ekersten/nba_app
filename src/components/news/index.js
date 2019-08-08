import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { connect } from 'react-redux';
import { getNews } from '../../store/actions/news_actions';


class NewsComponent extends Component {


    componentDidMount() {
        this.props.dispatch(getNews());
    }

    render() {
        return (
            <View>
                <Text>Hello I am the news</Text>
            </View>
        );
    }
}

// const styles = StyleSheet.create({

// });
function mapStateToProps(state) {
    console.log(state);

    return {
        News: state.News
    }
}

export default connect(mapStateToProps)(NewsComponent);
