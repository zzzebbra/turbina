import trackPath1 from '../test_tracks/Offspring — I Choose.mp3';
import coverPath1 from '../test_tracks/covers/Ixnay_On_The_Hombre.jpg';
import trackPath4 from '../test_tracks/bob_marley_and_robin_schulz-sun_is_shining.mp3';
import coverPath4 from '../test_tracks/covers/Bob Marley.jpg';
import trackPath5 from '../test_tracks/Bop - Fragile Moments.mp3';

const audioData = [
  {
    id: '1',
    artist: 'Offspring',
    secondArtist: '',
    trackName: 'I Choose',
    src: trackPath1,
    cover: coverPath1,
    video: 'https://www.youtube.com/watch?v=7yxbXsQ5yCc',
    text: `Look at me I'm fallin'
    Off of a cliff now
    I can still hear my mama yelling No No No
    But the words mean nothing
    Can't catch up to me now
    And the view is so beautiful
    All the way down
    When I was a little boy
    Suckin' juice from a bottleы
    Believing my perceptions were oh so real
    But I don't know nothing
    Still knowing nothing
    Was just enough for me to know the way I feel
    This is life
    What a fucked up thing we do
    What a nightmare come true
    Or a playground if we choose
    And I choose
    
    Look at me I'm swollen
    Like a banana fish now
    I'm never gonna make it out of my hole
    But I keep on laughing
    Doesn't really matter
    There's dozens of reasons for explaining my soul
    When I was a teenager
    Suckin' booze with the Vatos
    Discussing who was gonna live to be 21
    They said they wouldn't make it
    They didn't make it
    We're all naked when the day is said and done
    This is life
    What a fucked up thing we do
    What a nightmare come true
    Or a playground if we choose
    And I choose
    
    Don't know who made this all come true
    But now while you're here
    You just gotta do what you gotta do
    Now if I wasn't such a weenie
    Do you think you'd still love me
    Pretending I'm an airplane on the living
    Room floor
    But like a lovely generator
    You stand right by me
    And if words were wisdom I'd be talking
    Even more
    So I keep on falling
    As I'm looking back above me
    Watching as my mama just becomes a little dot
    Now I'm like DeNiro
    I'm amarillo
    And I'll never know when I hit the ground`,
  },
  {
    id: '4',
    artist: 'Bob Marley',
    secondArtist: 'Robin Shultz',
    trackName: 'Sun Is Shining',
    src: `${trackPath4}`,
    cover: `${coverPath4}`,
    video: undefined,
    text: `Sun is shining, the weather is sweet
    Make you wanna move your dancing feet now
    To the rescue, here I am
    Want you to know ya, can you understand
    When the morning gather the rainbow, yeah, yeah
    Want you to know I'm a rainbow too
    To the rescue, here I am
    Want you to know ya
    Can you, can you, can you understand
    The sun is shining, the weather is sweet now
    Make you wanna move your dancing feet, yeah
    Oh, to the rescue, here I am
    Want you to know just if you can
    Here I stand, no, no, no, no, no, no, no, no
    Can you understand me now, baby
    Do you believe me?`,
  },
  {
    id: '5',
    artist: 'Bop',
    secondArtist: '',
    trackName: 'Fragile Moments',
    src: `${trackPath5}`,
    cover: undefined,
    video: undefined,
    text: `There Is No Text In The Track`,
  },
]

export default audioData;