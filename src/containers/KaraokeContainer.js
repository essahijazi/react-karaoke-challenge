import React, { Component } from 'react';
import Filter from '../components/Filter';
import SongList from '../components/SongList';
import KaraokeDisplay from '../components/KaraokeDisplay';
import songs from '../data/songs';

class KaraokeContainer extends Component {
  
  constructor() {
    super()
    this.state = {
      fullSongList: [],
      filterSongList: [],
      playingSong: {}
    }
  }
  
  componentDidMount() {
    fetch(`http://localhost:4000/users/1/songs`)
    .then(response => response.json())
    .then(songsListJSON => {
      this.setState({
        filterSongList: songsListJSON,
        fullSongList: songsListJSON
      })
    })
  }

  filterSongs = (searchTerm) => {
    this.setState({
      filterSongList: this.state.fullSongList.filter(song => song.title.toLowerCase().includes(searchTerm.toLowerCase()))
    })
  }

  setPlayingSong = (song) => {
    this.setState({
      playingSong: song
    })
  }
  
  render() {
    return (
      <div className="karaoke-container">
        <div className="sidebar">
          <Filter filterSongs={this.filterSongs}/>
          <SongList setPlayingSong={this.setPlayingSong} songs={this.state.filterSongList}/>
        </div>
        <KaraokeDisplay playingSong={this.state.playingSong}/>
      </div>
    );
  }
}

export default KaraokeContainer;
