import { Grid ,  ButtonBase, Typography} from '@material-ui/core';
import styles from '../components/index.module.css';
export  default function Homepage(){
    return (
        <div className={styles.root}>
            <Grid container className={styles.flexcont} style={{backgroundColor:"white", borderRadius:12}}>
                <Grid container item xs={7} className={styles.flexcont} spacing={2} xs={12}>
                    <Grid item xs={12} className={styles.main}>
                        <Typography variant="h4"><strong>Year 6 Maths Programme</strong></Typography>
                        <Typography variant="h5">Consolidating KS2</Typography>
                        <br/>
                        <div className={styles.para}>Year 6 can be a time of uncertainity
                        and change as children prepare for the end of year exams and the move to Secondary School
                        .The Year 6 Programme is esigned to help your child meet thses challenges with confidence
                        , ensuring they feel prepared and excited for the new adventure ahead.
                        </div>
                        <p className={styles.para}>
                            Looking for <strong>SATs Revision?</strong>Try our&nbsp;
                            <strong><u>Year 6 SATs Revision Programme</u></strong>
                        </p>
                    </Grid>
                    <Grid container item xs={12}>
                        <Typography variant="h4"><strong>Key Topics</strong></Typography>
                        <Grid container item xs={12} className={styles.flexcont}>
                            {["BINDMAS","Long Multiplication","long Divison","Multiplying Fractions"].map((i) => (
                                <Grid item  xs={3} className={styles.flexcont}>
                                    <div className={styles.paper}><p>{i}</p></div>      
                                </Grid>
                            ))}
                        </Grid>
                        <Grid container item xs={12} className={styles.flexcont}>
                            {["Coordinates","Using Formulas","Linear Sequences","SATs Practice"].map((i) => (
                                <Grid item  xs={3} className={styles.flexcont}>
                                    <div className={styles.paper}><p>{i}</p></div>      
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container item className={styles.flexcont} xs={5} xs={12}>
                    <Grid item alignItems="center">
                        <ButtonBase >
                            <img  alt="complex" src="/images/1.jpg" className={styles.img}/>
                        </ButtonBase>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};
