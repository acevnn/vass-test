import classes from './PermaContent.module.scss';

export interface Content {
    heading?: string;
    paragraph?: string;
}

export default function PermaContent({heading, paragraph}: Content) {
    return (
        <>
            <h3 className={classes['perma-heading']}>{heading}</h3>
            <p className={classes['perma-paragraph']}>{paragraph}</p>
        </>
    )
}