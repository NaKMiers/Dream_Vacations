import React, { memo, useCallback, useEffect, useRef } from 'react'
import styles from './style.module.scss'
import SeparatorTitle from '../../components/SeparatorTitle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

function PolicyDoc() {
   const containerRef = useRef(null)

   // appear animation on scroll
   const handleScroll = useCallback(() => {
      if (containerRef) {
         const elements = [...containerRef.current.children]

         elements.forEach(e => {
            const top = e.getBoundingClientRect().top
            const bottom = e.getBoundingClientRect().bottom

            if (top < window.innerHeight && bottom > 0) {
               e.classList.add('floatUp')
               e.classList.add(styles.appeared)
            }
         })

         // remove event when all are appeared
         let countAppeared = 0

         elements.forEach(e => {
            if (e.className.includes(styles.appeared)) {
               countAppeared++
            }
         })

         if (countAppeared === elements.length) {
            console.log('remove---PolicyDoc')
            window.removeEventListener('scroll', handleScroll)
         }
      }
   }, [])

   // appear on scroll
   useEffect(() => {
      handleScroll()
      window.addEventListener('scroll', handleScroll)

      return () => {
         window.removeEventListener('scroll', handleScroll)
      }
   }, [handleScroll])

   return (
      <section className={styles.PolicyDoc}>
         <div className={`${styles.container} container`} ref={containerRef}>
            <SeparatorTitle title='Definitions And Legal References' dark style={{ marginBottom: 35 }} />

            <h5 className={styles.title}>Personal Data (Or data)</h5>
            <p className={styles.paragraph}>
               Any information that directly, indirectly, or in connection with other information —
               including a personal identification number — allows for the identification or
               identifiability of a natural person.
            </p>

            <h5 className={styles.title}>Usage Data</h5>
            <p className={styles.paragraph}>
               Information collected automatically through this website (or third-party services employed
               in this website), which can include: the IP addresses or domain names of the computers
               utilized by the users who use this website, the URI addresses (Uniform Resource
               Identifier), the time of the request, the method utilized to submit the request to the
               server, the size of the file received in response, the numerical code indicating the
               status of the server’s answer (successful outcome, error, etc.), the country of origin,
               the features of the browser and the operating system utilized by the user, the various
               time details per visit (e.g., the time spent on each page within the website) and the
               details about the path followed within the website with special reference to the sequence
               of pages visited, and other parameters about the device operating system and/or the User’s
               IT environment.
            </p>

            <h5 className={styles.title}>User</h5>
            <p className={styles.paragraph}>
               The individual using this website who, unless otherwise specified, coincides with the data
               subject.
            </p>

            <h5 className={styles.title}>Data Subject</h5>
            <p className={styles.paragraph}>The natural person to whom the personal data refers.</p>

            <h5 className={styles.title}>Data Processor</h5>
            <p className={styles.paragraph}>
               The natural or legal person, public authority, agency or other body which processes
               personal data on behalf of the controller, as described in this privacy policy.
            </p>

            <h5 className={styles.title}>Data Controller</h5>
            <p className={styles.paragraph}>
               The natural or legal person, public authority, agency or other body which, alone or
               jointly with others, determines the purposes and means of the processing of personal data,
               including the security measures concerning the operation and use of this website. The data
               controller, unless otherwise specified, is the owner of this website.
            </p>

            <h5 className={styles.title}>The Website</h5>
            <p className={styles.paragraph}>
               The means by which the personal data of the user is collected and processed.
            </p>

            <SeparatorTitle title='Types Of Data Collected' dark style={{ margin: '35px 0' }} />

            <p className={styles.paragraph}>
               Among the types of personal data that this website collects, by itself or through third
               parties, there are: cookies, username, email address, various types of data, usage data,
               website, first name and last name. Complete details on each type of personal data
               collected are provided in the dedicated sections of this privacy policy or by specific
               explanation texts displayed prior to the data collection. Personal data may be freely
               provided by the user, or, in case of usage data, collected automatically when using this
               website. Unless specified otherwise, all data requested by this website is mandatory and
               failure to provide this data may make it impossible for this website to provide its
               services. In cases where this website specifically states that some data is not mandatory,
               users are free not to communicate this data without consequences to the availability or
               the functioning of the service. Users who are uncertain about which personal data is
               mandatory are welcome to contact CodexThemes. Any use of cookies – or of other tracking
               tools – by this website or by the owners of third-party services used by this website
               serves the purpose of providing the service required by the user, in addition to any other
               purposes described in the present document and in the cookie policy. Users are responsible
               for any third-party personal data obtained, published or shared through this website and
               confirm that they have the third party’s consent to provide the data to the owner.
            </p>

            <SeparatorTitle
               title='More And Place Of Processing The Data'
               dark
               style={{ margin: '35px 0' }}
            />

            <h5 className={styles.title}>Methods of Processing</h5>
            <p className={styles.paragraph}>
               CodexThemes takes appropriate security measures to prevent unauthorized access,
               disclosure, modification, or unauthorized destruction of the data. The data processing is
               carried out using computers and/or IT enabled tools, following organizational procedures
               and modes strictly related to the purposes indicated. In addition to CodexThemes, in some
               cases, the data may be accessible to certain types of external parties (such as
               third-party technical service providers, mail carriers, hosting providers, IT companies,
               communications agencies) appointed, if necessary, as data processors. The updated list of
               these parties may be requested from CodexThemes at any time.
            </p>

            <h5 className={styles.title}>Legal Basic of Processing</h5>
            <p className={styles.paragraph}>
               CodexThemes may process personal data relating to users if one of the following applies:
            </p>

            <ul className={styles.checkList}>
               <li className={styles.checkItem}>
                  <div className={styles.icon}>
                     <FontAwesomeIcon icon={faCheck} />
                  </div>
                  <span>
                     Provision of data is necessary for the performance of an agreement with the user
                     and/or for any pre-contractual obligations thereof
                  </span>
               </li>
               <li className={styles.checkItem}>
                  <div className={styles.icon}>
                     <FontAwesomeIcon icon={faCheck} />
                  </div>
                  <span>
                     Processing is necessary for compliance with a legal obligation to which CodexThemes
                     is subject
                  </span>
               </li>
               <li className={styles.checkItem}>
                  <div className={styles.icon}>
                     <FontAwesomeIcon icon={faCheck} />
                  </div>
                  <span>
                     Processing is related to a task that is carried out in the public interest or in the
                     exercise of official authority vested in CodexThemes
                  </span>
               </li>
               <li className={styles.checkItem}>
                  <div className={styles.icon}>
                     <FontAwesomeIcon icon={faCheck} />
                  </div>
                  <span>
                     Processing is necessary for the purposes of the legitimate interests pursued by
                     CodexThemes or by a third party.
                  </span>
               </li>
            </ul>

            <p className={styles.paragraph}>
               In any case, CodexTheme will gladly help to clarify the specific legal basis that applies
               to the processing, and in particular whether the provision of personal data is a statutory
               or contractual requirement, or a requirement necessary to enter into a contract.
            </p>
         </div>
      </section>
   )
}

export default memo(PolicyDoc)
