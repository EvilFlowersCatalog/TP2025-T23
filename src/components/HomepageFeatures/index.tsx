import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type TeamMember = {
  name: string;
  role: string;
};

const TeamRow0: TeamMember[] = [
  {
    name: "Ing. Jakub Dubec",
    role: "Product Owner",
  }
];

const TeamRow1: TeamMember[] = [
  {
    name: "Juraj Budinský",
    role: "Data Science"
  },
  {
    name: "Tomáš Tuan Bui Anh",
    role: "Data Science"
  },
  {
    name: "Richard Čerňanský",
    role: "Data Science"
  }
];

const TeamRow2: TeamMember[] = [
  {
    name: "Marek Fiľo",
    role: "System Engineering"
  },
  {
    name: "Tomáš Horička",
    role: "System Engineering"
  },
  {
    name: "Adriana Pikartová",
    role: "Frontend/UX",
  }
]

function TeamList({ name, role }: TeamMember): ReactNode {
  return (
    <div className={clsx('col col--3', styles.memberBox)}>
      <div className="text--center">
        <div className={styles.icon}>🐸</div>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{name}</Heading>
        <p>{role}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <Heading as="h2" className={styles.teamTitle}>Členovia tímu</Heading>
        <div className={clsx("row", styles.row)}>
          {TeamRow0.map((props, idx) => (
            <TeamList key={idx} {...props} />
          ))} 
        </div>
        <div className={clsx("row", styles.row)}>
          {TeamRow1.map((props, idx) => (
            <TeamList key={idx} {...props} />
          ))} 
        </div>
        <div className={clsx("row", styles.row)}>
          {TeamRow2.map((props, idx) => (
            <TeamList key={idx} {...props} />
          ))} 
        </div>
      </div> 
    </section>
  );
}
