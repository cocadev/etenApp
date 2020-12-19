import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TextInput, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import i from '../../common/i'
import { CATEGORIES, SERVICELISTING } from '../../common/staticdata'

import Header from '../../components/Header';
import { images } from '../../common/images';
import { colors } from '../../common/colors';
import { LinearGradient } from 'expo-linear-gradient'
import { Actions } from 'react-native-router-flux';

const width = Dimensions.get('window').width

class Wall extends React.Component {

  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      isWaiting: false,
      filter: false,
      search: '',
      searchFlag: false
    }
  }

  _renderItem = ({ item }) => (
    <View style={styles.cateogry}>
      <Image source={item.image} style={{ width: width / 6, height: width / 6 }} />
      <Text style={[i.smallText, { marginBottom: 6 }]}>{item.title}</Text>
    </View>
  );

  _renderItem2 = ({ item }) => (
    <TouchableOpacity onPress={()=>Actions.walldetail({'profile':item})} style={{ marginHorizontal: 5, borderRadius: 4 }}>

      <Image source={{ uri: item.image }} style={{ width: width / 3 - 18, height: width / 3 - 18, borderRadius: 4 }} />
      <Image source={{ uri: item.user }} style={styles.circle} />
      <Image source={images.icon_dank} style={styles.dank} />

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
        <Text style={i.smallText}>{item.title}</Text>
        <Image source={images.result} style={{ width: 20, height: 10 }} />
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={i.smallText}>Service 2</Text>
        <Text style={i.smallText}>$25/h</Text>
      </View>
    </TouchableOpacity>
  )

  _renderItem3 = ({ item }) => (
    <TouchableOpacity style={{ marginHorizontal: 12, borderRadius: 4 ,backgroundColor:'#fff', flexDirection:'row', marginBottom:8, padding:12,  }}>

      <View style={{flex:4}}>
        <Image source={{ uri: item.image }} style={{ width: width / 3, height: width / 3 - 18, borderRadius: 4 }} />
        <Image source={{ uri: item.user }} style={[styles.circle, {bottom:-8}]} />
        <Image source={images.icon_dank} style={[styles.dank, {bottom:-8}]} />
      </View>

      <View style={{position:'relative', flex:7, paddingLeft:width/12, justifyContent:'space-between'}}>
          <Text style={i.smallText}>{item.description}</Text>

          <View>
            <View style={{flexDirection:'row'}}>
               <Image source={images.icon_rating} style={{ width: 10, height: 10 }} />
               <Image source={images.icon_rating} style={{ width: 10, height: 10 }} />
               <Image source={images.icon_rating} style={{ width: 10, height: 10 }} />
               <Image source={images.icon_rating} style={{ width: 10, height: 10 }} />
               <Image source={images.icon_rating} style={{ width: 10, height: 10 }} />
            </View>

            <Text style={i.smallText}>S(115)</Text>
          </View>

          <View style={{flexDirection:'row'}}>
            <View style={{flex:1}}>
              <Text style={i.smallText}>SELLER</Text>
              <Text style={[i.normalText, {color:colors.GREEN, fontSize:10}]}>Johnathan Doe</Text>
            </View>
            <View style={{flex:1}}>
              <Text style={i.smallText}>PRICE</Text>
              <Text style={[i.normalText, {color:colors.GREEN, fontSize:10, marginLeft:12}]}>$25 / Hour</Text>
            </View>
          </View>

      </View>
    </TouchableOpacity>
  )

  _ItemSeparator = () => <View style={styles.separator} />;

  dropFilter() {
    return (
      <ScrollView horizontal style={{ flexDirection: 'row', paddingHorizontal: 16, paddingVertical: 10, backgroundColor: '#fff' }}>
        <View style={{ marginRight: 15 }}>
          <Text style={[i.smallText, { fontSize: 9 }]}>DURATION</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={[i.smallText, { color: colors.DARK, fontSize: 8 }]}>3 hours</Text>
            <Image source={images.icon_down} style={{ width: 10, height: 5, marginLeft: 6 }} />
          </View>
        </View>
        <View style={{ marginRight: 15 }}>
          <Text style={[i.smallText, { fontSize: 9 }]}>LANGUAGE</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={[i.smallText, { color: colors.DARK, fontSize: 8 }]}>English</Text>
            <Image source={images.icon_down} style={{ width: 10, height: 5, marginLeft: 6 }} />
          </View>
        </View>
        <View style={{ marginRight: 15 }}>
          <Text style={[i.smallText, { fontSize: 9 }]}>LOCATION</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={[i.smallText, { color: colors.DARK, fontSize: 8 }]}>M41Tw</Text>
            <Image source={images.icon_down} style={{ width: 10, height: 5, marginLeft: 6 }} />
          </View>
        </View>
        <View style={{ marginRight: 15 }}>
          <Text style={[i.smallText, { fontSize: 9 }]}>DATE</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={[i.smallText, { color: colors.DARK, fontSize: 8 }]}>01/03/18</Text>
            <Image source={images.icon_down} style={{ width: 10, height: 5, marginLeft: 3 }} />
          </View>
        </View>
        <View>
          <Text style={[i.smallText, { fontSize: 9 }]}>TIME</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={[i.smallText, { color: colors.DARK, fontSize: 8 }]}>7:00pm-10:00pm</Text>
            <Image source={images.icon_down} style={{ width: 10, height: 5, marginLeft: 3 }} />
          </View>
        </View>
      </ScrollView>
    )
  }

  inputFilter() {
    return (
      <View>
        <ScrollView horizontal style={{ backgroundColor: '#fff', padding: 12 }}>
          <View style={{ flexDirection: 'row', flex: 2, alignItems: 'center' }}>
            <View style={styles.input}>
              <Image source={images.icon_map} style={{ width: 12, height: 16 }} />
              <Text style={[i.smallText, { marginLeft: 5 }]}>35 fountain M2B1RS</Text>
              <Image source={images.icon_spot} style={{ width: 16, height: 16, marginLeft: 10 }} />

            </View>
          </View>
          <View style={{ flexDirection: 'row', flex: 1 }}>
            <View style={styles.input}>
              <Image source={images.icon_calendar} style={{ width: 14, height: 15 }} />
              <Text style={[i.smallText, { marginLeft: 5 }]}>01/03/2019</Text>
            </View>
          </View>

          <View style={{ flexDirection: 'row', flex: 1 }}>
            <View style={styles.input}>
              <Image source={images.icon_clock} style={{ width: 16, height: 16 }} />
              <Text style={[i.smallText, { marginLeft: 5 }]}>10:00 AM</Text>
            </View>
          </View>

        </ScrollView>
        <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', paddingBottom: 12 }}>
          <TouchableOpacity onPress={() => Actions.wall()}>
            <LinearGradient
              colors={[colors.GREEN, colors.SKY]}
              start={[0, 1]} end={[1, 0]}
              style={{ padding: 7, paddingHorizontal: 22, alignItems: 'center', borderRadius: 20, marginHorizontal: 12 }}>
              <Text
                style={{
                  backgroundColor: 'transparent',
                  fontSize: 10,
                  color: '#fff',
                  fontFamily: 'Montserrat-Medium'
                }}>
                SEARCH
               </Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={i.normalText}>CANCEL</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  renderView() {
    return (
      <View>
        <View style={{ marginBottom: 10, paddingLeft: 12, paddingTop: 12 }}>

          <FlatList
            horizontal
            data={CATEGORIES}
            keyExtractor={(item, i) => String(i)}
            renderItem={this._renderItem}
            numColumns={1}
          />

        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 18, marginVertical: 8, }}>
          <Text style={i.normalText}>SNOW CLEARANCE SERVICE 1</Text>
          <Text style={{ color: colors.SKY }}>See more</Text>
        </View>

        <View style={{ marginBottom: 10, paddingHorizontal: 12, }}>

          <FlatList
            horizontal
            data={SERVICELISTING}
            keyExtractor={(item, i) => String(i)}
            renderItem={this._renderItem2}
            numColumns={1}
          />

        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 18, marginVertical: 8, }}>
          <Text style={i.normalText}>SNOW CLEARANCE SERVICE 2</Text>
          <Text style={{ color: colors.SKY }}>See more</Text>
        </View>

        <View style={{ marginBottom: 10, paddingHorizontal: 12, }}>

          <FlatList
            horizontal
            data={SERVICELISTING}
            keyExtractor={(item, i) => String(i)}
            renderItem={this._renderItem2}
            numColumns={1}
          />

        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 18, marginVertical: 8, }}>
          <Text style={i.normalText}>SNOW CLEARANCE SERVICE 3</Text>
          <Text style={{ color: colors.SKY }}>See more</Text>
        </View>

        <View style={{ marginBottom: 10, paddingHorizontal: 12, }}>

          <FlatList
            horizontal
            data={SERVICELISTING}
            keyExtractor={(item, i) => String(i)}
            renderItem={this._renderItem2}
            numColumns={1}
          />

        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 18, marginVertical: 8, }}>
          <Text style={i.normalText}>SNOW CLEARANCE SERVICE 4</Text>
          <Text style={{ color: colors.SKY }}>See more</Text>
        </View>

        <View style={{ marginBottom: 10, paddingHorizontal: 12, }}>

          <FlatList
            horizontal
            data={SERVICELISTING}
            keyExtractor={(item, i) => String(i)}
            renderItem={this._renderItem2}
            numColumns={1}
          />

        </View>
      </View>
    )
  }

  renderSearch(){
    return(
      <View>
        <View style={{flexDirection:'row', padding:16, paddingTop:22}}>
          <Text style={i.normalText}>Search results for :</Text>
          <Text style={[i.normalText, {color:colors.GREEN}]}> {this.state.search}</Text>
        </View>
        <FlatList
            data={SERVICELISTING}
            keyExtractor={(item, i) => String(i)}
            renderItem={this._renderItem3}
        />
      </View>
    )
  }

  render() {
    const { filter, search, searchFlag } = this.state
    return (
      <View style={i.container}>

        <Header />

        <ScrollView>

          {filter && this.dropFilter()}

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: filter ? '#fafafa' : '#fff', padding: 8 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 12, }}>
              <Image source={images.icon_big_search} style={{ width: 15, height: 15 }} />
              <TextInput
                style={{ marginLeft: 12, fontFamily: 'Montserrat-Medium', fontSize: 11, width: width / 2 }}
                placeholder="Search services"
                onChangeText={search => this.setState({ search })}
                value={search}
              />
            </View>
            <TouchableOpacity onPress={() => this.setState({ filter: !this.state.filter })} style={styles.roundBtn}>
              <Image source={images.icon_twin} style={{ width: 13, height: 13 }} />
              <View >
                <Text style={{ color: colors.DARK, marginLeft: 5, fontFamily: 'Montserrat-Medium', fontSize: 11 }}>Filters</Text>
              </View>
            </TouchableOpacity>
          </View>

          { filter && this.inputFilter()}

          { search.length == 0 && this.renderView()}
          { search.length !== 0 && this.renderSearch()}

        </ScrollView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  separator: {
    height: 5,
    backgroundColor: 'rgba(0, 0, 0, .08)',
  },
  roundBtn: {
    flexDirection: 'row',
    padding: 2,
    paddingHorizontal: 12,
    alignItems: 'center',
    borderColor: colors.GREEN,
    borderWidth: 1,
    borderRadius: 20,
  },
  cateogry: {
    marginHorizontal: 2,
    alignItems: 'center',
  },
  circle: {
    width: width / 8,
    height: width / 8,
    borderRadius: width / 16,
    position: 'absolute',
    left: 5,
    bottom: 25,
    borderColor: '#fff',
    borderWidth: 1
  },
  dank: {
    width: 10,
    height: 12,
    position: 'absolute',
    left: width / 9,
    bottom: 25,
  },
  input: {
    flexDirection: 'row',
    borderRadius: 3,
    borderColor: colors.GREY3,
    borderWidth: 1,
    padding: 8,
    paddingHorizontal: 4,
    marginRight: 12
  }
});

export default Wall;