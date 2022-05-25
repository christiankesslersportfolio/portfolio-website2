import { Divider, Heading, Link, Text } from "@chakra-ui/react"

const Background = () => {
  return (
    <>
      <Heading color="#FF7F50" mt="10rem" as="h1">
        Mon parcours
      </Heading>
      <Divider
        my="3"
        width="75%"
        size="50%"
        borderColor="#FF7F50"
        borderBottomWidth="0.125rem"
      />
      <Heading mt="6" as="h2">
        Développeur Solidity chez{" "}
        <Link _hover={{ color: "#FF7F50" }} href="https://ideasoft.io/">
          IdeaSoft
        </Link>
      </Heading>
      <Text mt="4" fontSize="xl" lineHeight="8">
        J’ai travaillé pendant 6 mois chez Ideasoft en tant que développeur
        Solidity. IdeaSoft est une entreprise ukrainienne de plus de 150
        employés basée (avant la guerre) à Kharkiv. Elle est devenu membre du
        groupe{" "}
        <Link _hover={{ color: "#FF7F50" }} href="https://sigma.software/ ">
          Sigma Software
        </Link>{" "}
        en 2021.
      </Text>
      <Text mt="4" fontSize="xl" lineHeight="8">
        Durant cette expérience j’ai été affecté à plusieurs projets sur les
        thématiques de la DeFi (finance décentralisée, plus précisément sur
        l’assurance décentralisée), les noms de domaines décentralisés ainsi que
        sur les NFT (jetons non fongibles).
      </Text>
      <Text mt="4" fontSize="xl" lineHeight="8">
        Le département blockchain était composé d’une équipe de 10 personnes où
        nous faisons régulièrement des sessions d’apprentissage et d’entraide
        sur Solidity, l’EVM et un peu sur le front-end.
      </Text>
      <Heading mt="6" as="h2">
        Apprenant à l’école{" "}
        <Link _hover={{ color: "#FF7F50" }} href="https://alyra.fr/">
          Alyra
        </Link>
      </Heading>
      <Text mt="4" fontSize="xl" lineHeight="8">
        J’ai eu la chance de participé à la dernière session de reconversion
        professionnelle proposé par l’école d’une durée de 6 mois. Grace aux
        trois encadrant très compétant dans leur domaines respectifs, j’ai pu
        apprendre le code avec seulement une lointaine expérience sur R.
      </Text>
      <Text mt="4" fontSize="xl" lineHeight="8">
        Pendant cette formation j’ai appris la culture du Web et les pratiques
        de travaille dans ce domaine (méthode Agile & SCRUM). Nous avons
        pratiqué les bases du développement Web avec HTML, CSS et JavaScript
        ainsi que l’utilisation de GitHub pour les projets collaboratifs ou
        personnel.
      </Text>
      <Text mt="4" fontSize="xl" lineHeight="8">
        Avec cette base nous avons pu explorer des frameworks pour le
        développement front-end avec ReactJS, Bootstrap et Chakra UI. Ainsi que
        le développement back-end avec Node.js et une légère initiation à
        Express.js pour créer des serveurs.
      </Text>
      <Text mt="4" fontSize="xl" lineHeight="8">
        Ensuite nous avons attaqué notre apprentissage sur la blockchain par un
        peu de culture de cet écosystème (Satoshi Nakamoto, Bitcoin, Ethereum et
        son fonctionnement, …). Nous avons eu beaucoup de temps de cours sur
        Solidity et les bonnes pratiques de ce langage (notamment l’utilisation
        d’OpenZeppelin). Dans un premier nous utilisions Remix pour écrire et
        déployer nos smart contracts. Avec les bases en Node.js Hardhat, outils
        de développement Ethereum, était plus facile à prendre en main. Avec
        Hardhat nous avons appris à écrire, à l’aide des librairies Waffle et
        Ethers.js, des tests unitaires sur les smart contracts et des scripts de
        déploiement et post-déploiement sur différents réseaux.
      </Text>
      <Text mt="4" fontSize="xl" lineHeight="8">
        Mis ensemble ces savoirs nous ont permit de présenter un projet
        full-stack en fin de formation, une dApp avec un front-end réalisé avec
        ReactJS relié un back-end sur Ethereum (testnet).
      </Text>
      <Text mt="4" fontSize="xl" lineHeight="8">
        En parallèle la promotion a eu l’occasion de présenter des veilles
        technologiques sur un large panel de sujets.
      </Text>

      <Text mt="10" fontSize="lg" color="#FF7F50">
        <i>Avant le code ma spécialité était la biologie.</i>
      </Text>

      <Heading mt="6" as="h2">
        Doctorant à l'
        <Link
          _hover={{ color: "#FF7F50" }}
          href="https://www.univ-gustave-eiffel.fr/ "
        >
          université Paris-Est
        </Link>
      </Heading>
      <Text mt="4" fontSize="xl" lineHeight="8">
        J’ai été pendant 18 mois en préparation d’un doctorat en Science des
        matériaux à l’IFSTTAR (Institut Français des Sciences et Technologies
        des Transports, de l’Aménagement et des Réseaux) maintenant{" "}
        <Link
          _hover={{ color: "#FF7F50" }}
          href="https://www.univ-gustave-eiffel.fr/"
        >
          université Gustave Eiffel
        </Link>
        . Mon sujet de thèse était porté sur la fabrication du béton de chanvre,
        un matériau isolant, plus précisément mon but était d’identifier les
        molécules à l’origine d’un retard de prise du ciment une fois mélangé
        aux copeaux de chanvre.
      </Text>
      <Heading mt="6" as="h2">
        Licence et Master à l’
        <Link _hover={{ color: "#FF7F50" }} href="https://www.univ-lyon1.fr/">
          université Claude Bernard Lyon I
        </Link>
      </Heading>
      <Text mt="4" fontSize="xl" lineHeight="8">
        Mon parcours licence était porté sur l’écologie au sens large, où j’ai
        étudié les mécanismes de l’évolution, l’étude de la biodiversité, les
        méthodes de bio-statistiques (là où j’ai fait mes premiers pas avec R),
        la dynamiques des populations, l’écologie à toute les échelles (de
        l’individu à la biosphère). En master je me suis spécialisé sur l’étude
        des végétaux, avec deux axes de compétences : la biochimie
        (identification des molécules, et connaissances des voies métaboliques)
        et la génétique (étude des réseaux de gènes, méthodes de génie
        génétique, …).
      </Text>
    </>
  )
}

export default Background
