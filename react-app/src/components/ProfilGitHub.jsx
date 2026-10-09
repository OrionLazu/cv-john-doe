import Indicateur from "./Indicateur.jsx";
import { formaterDate } from "../utils/dates.js";

/**
 * Composant séparé chargé de l'affichage des informations du profil.
 *
 * Il ne réalise aucun appel réseau : il reçoit les données déjà chargées par
 * le composant principal et se contente de les mettre en forme. Ce découpage
 * respecte l'exigence du cahier des charges : « L'affichage des informations
 * du profil se fait dans une fonction séparée. »
 *
 * @param {{profil: object}} props
 */
export default function ProfilGitHub({ profil }) {
  if (!profil) {
    return null;
  }

  const {
    login,
    name,
    avatar_url: avatarUrl,
    bio,
    company,
    location,
    blog,
    followers,
    following,
    public_repos: depotsPublics,
    created_at: creeLe,
    updated_at: modifieLe,
    html_url: urlProfil,
    repos_url: urlDepots,
  } = profil;

  return (
    <article className="app-profil card mx-auto">
      <div className="card-body p-4 p-lg-5">

        <h2 className="text-center mb-4">{name || login}</h2>

        <p className="text-center mb-4">
          <img
            className="app-avatar"
            src={avatarUrl}
            width="180"
            height="180"
            alt={`Avatar du profil GitHub ${name || login}`}
          />
        </p>

        {bio ? <p className="lead text-center">{bio}</p> : null}

        <p className="text-center mb-4">
          <a
            className="btn btn-outline-primary"
            href={urlProfil}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github me-2" aria-hidden="true" />
            Voir le profil sur GitHub
          </a>
        </p>

        <div className="row g-3 mb-4">
          <Indicateur libelle="Abonnés" valeur={followers} icone="fa-solid fa-users" />
          <Indicateur libelle="Abonnements" valeur={following} icone="fa-solid fa-user-plus" />
          <Indicateur libelle="Dépôts publics" valeur={depotsPublics} icone="fa-solid fa-book" />
        </div>

        <dl className="row app-details mb-0">
          <dt className="col-sm-5">Nom d&apos;utilisateur</dt>
          <dd className="col-sm-7">{login}</dd>

          {company ? (
            <>
              <dt className="col-sm-5">Entreprise</dt>
              <dd className="col-sm-7">{company}</dd>
            </>
          ) : null}

          {location ? (
            <>
              <dt className="col-sm-5">Localisation</dt>
              <dd className="col-sm-7">{location}</dd>
            </>
          ) : null}

          {blog ? (
            <>
              <dt className="col-sm-5">Site web</dt>
              <dd className="col-sm-7">
                <a href={blog} target="_blank" rel="noopener noreferrer">
                  {blog}
                </a>
              </dd>
            </>
          ) : null}

          <dt className="col-sm-5">Créé le</dt>
          <dd className="col-sm-7">
            <time dateTime={creeLe}>{formaterDate(creeLe)}</time>
          </dd>

          <dt className="col-sm-5">Modifié le</dt>
          <dd className="col-sm-7">
            <time dateTime={modifieLe}>{formaterDate(modifieLe)}</time>
          </dd>

          <dt className="col-sm-5">URL des dépôts</dt>
          <dd className="col-sm-7 text-break mb-0">
            <a href={urlDepots} target="_blank" rel="noopener noreferrer">
              {urlDepots}
            </a>
          </dd>
        </dl>

      </div>
    </article>
  );
}
