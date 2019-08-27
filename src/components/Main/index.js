import React, { Component } from "react";
import { hot } from 'react-hot-loader';
import classes from './style.scss';


class Main extends Component {
    render() {

        return (
            <div className={classes.text}>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <a href="#">Corporis</a> eligendi iusto
                    omnis, porro temporibus. Adipisci aspernatur, dolor hic iusto, maxime odit quis quod repellendus
                    tempora unde voluptate voluptatum!</p><p>Deleniti dolorum enim et incidunt laudantium maxime
                nesciunt quod vel. Aut autem et molestias nobis qus quis quos tempora. <a href="#">Alias aspernatur</a>.
                Labore quisquam voluptates. Laborum, non?</p><p>Ab adipisci autem corporis cumque debitis
                dignissimos doloremque ea eos explicabo fugiat inventore minima modi neque numquam omnis optio qui sed
                sit, sunt suscipit ut vitae voluptatibus? Aspernatur id, natus?</p><p>A accusantium aliquam amet animi
                assumenda, dignissimos dolores earum excepturi harum, hic ipsum natus nihil numquam odit optio.
                <a href="#">Perspiciatis placeat</a> suscipit voluptate voluptates. Incidunt, quia, unde!</p><p>Ab ad
                blanditiis culpa debitis deserunt dolore dolorem error ex facilis iure laudantium maiores natus
                necessitatibus nesciunt perferendis porro quas ratione, ullam unde, ut veniam veritatis voluptas!
                Itaque, optio, vitae.</p>

            </div>
        );
    }
}

export default hot(module)(Main);
