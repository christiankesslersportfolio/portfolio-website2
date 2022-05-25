import {
  Divider,
  Heading,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react"

const Vision = () => {
  return (
    <>
      <Heading mt="10rem" color="#FF7F50" as="h1">
        Ma vision
      </Heading>
      <Divider
        my="3"
        width="75%"
        size="50%"
        borderColor="#FF7F50"
        borderBottomWidth="0.125rem"
      />
      <Text mt="4" fontSize="xl" lineHeight="8">
        J’investit la plupart de mon énergie pour porter une vision qui gravite
        autour de trois sujets qui sont pour moi fondamentaux :{" "}
        <b>l’économie circulaire, la connaissance et la liberté.</b>
      </Text>
      <Heading as="h2" mt="6">
        L’économie circulaire
      </Heading>
      <Text mt="4" fontSize="xl" lineHeight="8">
        Depuis la révolution industrielle, l’Humain a développé un modèle
        industriel linéaire et standardisé sur la plupart des filières (de
        l’alimentation à la haute technologie) où la seule variable d’ajustement
        serait les économies d’échelles résultant d’une compétition plutôt
        agressive. Or ce modèle est en total contradiction avec le modèle
        qu’utilise la Nature, un modèle qui a bénéficié de 3.8 milliards
        d’années de recherche et développement.
      </Text>
      <Text mt="4" fontSize="xl" lineHeight="8">
        Dans la Nature tout processus est cyclique, les déchets des uns sont les
        matières premiers des autres, les feuilles tombées des arbres sont les
        nutriments pour les êtres vivant du sol.
      </Text>
      <Text mt="4" fontSize="xl" lineHeight="8">
        La Nature se bat continuellement contre l’entropie, toute perte
        d’énergie est minimisée, le thon à évoluer en organisant son réseau
        vasculaire de façon à conserver la chaleur au centre de son corps pour
        accroitre sa vitesse.
      </Text>
      <Text mt="4" fontSize="xl" lineHeight="8">
        Bien que la compétition et le parasitisme existent dans la Nature, le
        modèle largement retenu est la coopération, les légumineuses s’associe à
        des bactéries fixant l’azote présent dans l’air (inutilisable par les
        plantes telle qu’elle).
      </Text>
      <Text mt="4" fontSize="xl" lineHeight="8">
        La Nature est constituée de haute technologies, l’ADN et sa machinerie
        permettent de stocker toute l’information nécessaire pour reproduire des
        êtres vivants semblables utilisant les mêmes stratégies que leur
        ancêtres.
      </Text>
      <Text mt="4" fontSize="xl" lineHeight="8">
        L’économie circulaire est la porte d’entrée vers l’abondance
        (énergétique, alimentaire, …) et la Nature nous offre des outils, des
        savoirs, des compétences pour s’orienter vers ce modèle.
      </Text>
      <Text color="#FF7F50" fontSize="xl" display="block" mt="6" as="i">
        Pourquoi ignorer cela ? Pourquoi mépriser la Nature ?
      </Text>
      <Heading as="h2" mt="6">
        La connaissance
      </Heading>
      <Text mt="4" fontSize="xl" lineHeight="8">
        J’ai arrêté ma thèse en partie car les perspectives d’avenir d’un
        chercheur subissent une sorte de chape de plomb. La science est
        malheureusement parasité par son système de publication, ayant subi une
        important monopolisation qui s’est accélérée avec la transition
        numérique.
      </Text>
      <Text mt="4" fontSize="xl" lineHeight="8">
        Ceci est dû à son modèle économique qui est basé traditionnellement sur
        l’abonnement, payer pour lire des contenus scientifique (payé par les
        laboratoires, souvent eux-mêmes payé ou les états). Ce modèle est en
        transition vers le nouveau modèle de l’OpenAccess, payer pour publier
        (payer par les laboratoires, souvent eux-mêmes payé par les états).
      </Text>
      <Text mt="4" fontSize="xl" lineHeight="8">
        Je parle de parasitisme car les laboratoires (et souvent les états donc)
        subissent une triple ponction de leur financement car :
      </Text>
      <UnorderedList ps="3">
        <ListItem mb="3" fontSize="xl" lineHeight="8">
          Ils payent les revues scientifiques que lisent les chercheurs pour
          créer et proposer des énoncés scientifiques.
        </ListItem>
        <ListItem fontSize="xl" lineHeight="8">
          Ils payent pour publier leur résultats dans ces revues. La carrière
          des chercheurs est très dépendante de leurs publications, notamment
          basée sur le prestige associé à la publication dans certaines revues.
        </ListItem>
        <ListItem fontSize="xl" lineHeight="8">
          Les revues scientifiques demande aux chercheurs expert d’un domaine de
          relire les résultats scientifiques avant leur publication, c’est la
          validation par les pairs (peer-reviewing). Ce processus est réalisé
          sur la base du volontariat des chercheurs, volontariat dépensant du
          temps, du temps payé par les laboratoires.
        </ListItem>
      </UnorderedList>
      <Text mt="4" fontSize="xl" lineHeight="8">
        Aujourd’hui la quantité de connaissance scientifique augmente beaucoup
        plus vite que l’accès physique et intellectuelle à celle-ci. Creusant
        l’écart entre le monde scientifique et celui du grand public, un écart
        qui devient problématique car il participe à augmenter la défiance de la
        population envers la science.
      </Text>
      <Text mt="4" fontSize="xl" lineHeight="8">
        Or le temps et l’argent parasité par le système de publication
        scientifique serait très précieux dans la transmission et la
        vulgarisation de ces savoirs (tant à l’échelle du chercheur que du
        laboratoire). Les efforts de vulgarisation ne sont que très peu
        considérés dans la carrière d’un chercheur ou bien l’attribution de
        financement pour le laboratoire.
      </Text>
      <Text color="#FF7F50" fontSize="xl" display="block" mt="6" as="i">
        Comment acceptons nous de laisser ces hommes et femmes brillants
        prisonniers de ce système ?
      </Text>
      <Heading as="h2" mt="6">
        La liberté
      </Heading>
      <Text mt="4" fontSize="xl" lineHeight="8">
        La liberté De Edward Snoden aux cypherpunks comme Satoshi Nakamoto, j’ai
        pris conscience du combat que mène les défenseurs de la liberté, un
        combat très dangereux mais essentiels pour ne pas tomber dans un
        scénario hollywoodien.
      </Text>
      <Text mt="4" fontSize="xl" lineHeight="8">
        J’ai compris l’importance du rôle de l’anonymat pour la liberté, ainsi
        que pourquoi le « je n’ai rien à cacher » est un comportement égoïste
        qui disparait le jour où vous vous apercevez que vous ne pourrez plus
        cacher certaines partie de vous. La crise sanitaire a malheureusement
        fait reculer la liberté des individus de manière plus ou moins violente
        selon les pays, et l’extrapolation de cette situation nous montre une
        société assez effrayante, où la plupart de nos traits personnels (santé,
        comportement, ethnie, …) serait millimétrés et utilisés (en bien ou en
        mal).
      </Text>
      <Text mt="4" fontSize="xl" lineHeight="8">
        Or cette tendance va à l’encontre d’une société productive et
        innovatrice, la liberté des individus est fortement corrélée à la
        créativité, l’entraide, l’ouverture d’esprit. Sans anonymat certaines
        personne ne veulent pas dévoilé leur arts, leur idées, …
      </Text>
      <Text mt="4" fontSize="xl" lineHeight="8">
        C’est la reproduction, le brassage génétique, le hasard, et la prise de
        risque qui ont permis à la Nature de survivre et s’adapter à son
        environnement. En essayant de contrôler le maximum de paramètres
        l’humain pourrait rapidement se retrouver affaiblit face à un
        environnement changeant.
      </Text>
      <Text color="#FF7F50" fontSize="xl" display="block" mt="6" as="i">
        Pourquoi se priver de liberté ?
      </Text>
    </>
  )
}

export default Vision
