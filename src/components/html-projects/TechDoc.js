import React from "react";
import Navbar from "../key/Navbar";
import ContactLinks from "../key/ContactLinks";

function TechDoc() {
  return (
    <>
      <Navbar />
      <div className="page-body">
        <div className="project-body">
          <div id="tech-doc">
            <nav class="navbar">
              <h3 className="nav-link">Cast SDK</h3>
              <ul style={{ listStyle: "none" }} className="tech-list">
                <li>
                  <a class="nav-link" href="#discovery_troubleshooting">
                    Discovery Troubleshooting
                  </a>
                </li>
                <li>
                  <a class="nav-link" href="#check_the_sender_app">
                    Check the Sender App
                  </a>
                </li>
                <li>
                  <a class="nav-link" href="#synchronize_the_devices">
                    Synchronize the Devices
                  </a>
                </li>
                <li>
                  <a class="nav-link" href="#ping_the_devices">
                    Ping the devices
                  </a>
                </li>
                <li>
                  <a class="nav-link" href="#check_the_router">
                    Check the router
                  </a>
                </li>
                <li>
                  <a class="nav-link" href="#check_the_traffic">
                    Check the traffic
                  </a>
                </li>
              </ul>
            </nav>
            <main id="main-doc">
              <section class="main-section" id="discovery_troubleshooting">
                <h2>Discovery Troubleshooting</h2>
                <p>
                  The Cast SDK performs device discovery, as described for
                  Android, Chrome, and iOS, to provide the user with a list of
                  available Cast-enabled devices. The sender app can then
                  connect to a receiver device and begin casting. When device
                  discovery fails, the issue may be with the app (sender or
                  Cast-enabled devices) the Cast device, or the network.
                </p>
                <p>
                  This document describes ways to troubleshoot for device
                  discovery problems: the Cast-enabled devices does not appear
                  in the list of connected Cast devices or, worse, the Cast
                  button does not appear when you run the sender app. Because
                  there are so many potential factors, and so many variables in
                  the discovery process, these measures may not definitively
                  prove any one cause, but they help you narrow down the
                  possible causes.
                </p>
                <p>
                  Before investigating your device discovery problem, be sure
                  the following conditions are established:
                </p>
                <ul>
                  <li>
                    <p>
                      The sender device is running a Cast app that you can use
                      for testing. Do not use the Netflix or YouTube apps to
                      test discovery, as these use some specialized discovery
                      mechanisms.
                    </p>
                  </li>
                  <li>
                    <p>
                      The Web Receiver device is an official Google Cast device.
                      For example, Chromecast, Google Home, or Google Nest Hub.
                    </p>
                  </li>
                  <li>
                    <p>The sender device must have WiFi enabled and running.</p>
                  </li>
                  <li>
                    <p>
                      The sender device and the Cast-enabled devices device must
                      be connected to the same WiFi network. Do not attempt to
                      resolve discovery issues while in guest mode.
                    </p>
                  </li>
                </ul>
                <p>
                  Also, see Debugging for more information about debugging your
                  Web Receiver application.
                </p>
                <p>
                  To get further assistance with your issue, gather all
                  available information such as debugging logs, ping response
                  data, and network service data, and use one of the support
                  options described in Google Cast Support.
                </p>
              </section>
              <section class="main-section" id="check_the_sender_app">
                <header>Check the sender app</header>
                <ol>
                  <li>
                    <p>
                      Connect both the sender and the Cast-enabled devices to
                      the same WiFi network.
                    </p>
                  </li>
                  <li>
                    <p>Restart the sender app.</p>
                  </li>

                  <ul>
                    <li>
                      <p>
                        On Android, force the app to stop by using the Android
                        system settings. Then re-launch the app.
                      </p>
                    </li>
                    <li>
                      <p>
                        On iOS, double-click the home button, select the sender
                        app, and swipe it away to shut it down. Then re-launch
                        the app.
                      </p>
                    </li>
                  </ul>
                  <li>
                    <p>
                      In the sender app, touch the Cast button to view Cast
                      devices on the network. If the Cast-enabled device is now
                      listed (discovered), there may still be a problem with the
                      sender app. Observe the sender app and note the conditions
                      under which it loses its ability to discover your
                      receiver: what is happpening in the app? Is the time to
                      connection loss consistent over several restarts?
                    </p>
                  </li>

                  <li>
                    <p>
                      Run a different sender app (not Netflix or YouTube), and
                      touch the Cast button to view Cast devices on the network.
                    </p>
                    <p>
                      If other apps are consistently discovering your receiver,
                      and your sender app isn't, the problem is probably in your
                      sender app. On the other hand, if all apps have problems
                      discovering your receiver, the problem may be with your
                      receiver or the network.
                    </p>
                  </li>

                  <li>
                    <p>
                      Run your sender app on a different platform (if possible).
                    </p>

                    <p>
                      When running your sender app on other platforms, is the
                      discovery behavior the same?
                    </p>
                  </li>

                  <li>
                    <p>
                      Run any app (not Netflix or YouTube) on a different
                      platform than that of your sender app.
                    </p>

                    <p>
                      If your sender app is on the Android platform, run a
                      different app on iOS, and vice versa. If all apps of a
                      certain platform fail consistently, while those of another
                      do not, the problem may be with the platform.
                    </p>
                  </li>
                </ol>
              </section>
              <section class="main-section" id="synchronize_the_devices">
                <header>Synchronize the devices</header>
                <p>
                  The authentication handshake between the sender and receiver
                  can fail if there is a significant disparity between the
                  system time on the sender device and that of the Cast-enabled
                  device. A disparity of as little as 10 minutes may cause
                  authentication to fail.
                </p>
                <p>
                  The system time on a Cast device is immutable and the device
                  can maintain the correct time if connected to the internet.
                  The system time on most sender devices (such as a phone) is
                  mutable, but you should allow the device to get the system
                  time automatically by connecting it to the internet.
                </p>
                <p>
                  If the system time on either the sender or the receiver is
                  incorrect, reboot the device and connect it to the internet.
                  If the device is unable to maintain the correct time, contact
                  the device vendor.
                </p>
              </section>
              <section class="main-section" id="ping_the_devices">
                <header>Ping the devices</header>
                <p>
                  When you ping the devices, note the response message content
                  so you can report it in any communication to{" "}
                  <a
                    href="https://developers.google.com/cast/docs/support"
                    target="_blank"
                    rel=" noopener noreferrer"
                  >
                    Google Cast Support.
                  </a>
                </p>
                <ol>
                  <li>
                    <p>
                      Connect both the sender and the receiver to the same WiFi
                      network and verify that both devices indicate they are
                      connected.
                    </p>
                  </li>
                  <li>
                    <p>Find the Cast-enabled device IP address.</p>
                    <p>
                      Use the Google Home app to retrieve the IP address of a
                      Cast device (excluding Android TV). For Android TV, get
                      the IP address from the Settings &#62; Device &#62;
                      Network &#62; WiFi &#62; Network &#62; Status Info menu.
                    </p>
                  </li>
                  <li>
                    <p>
                      Connect a computer to the same WiFi network as the
                      Cast-enabled device and open a command line interface.
                    </p>
                  </li>
                  <li>
                    <p>Ping the Cast device and note the response.</p>
                    <p class="code">
                      <code>
                        {" "}
                        ping &#60;Cast-enabled device IP address &#62;
                      </code>
                    </p>
                  </li>
                  <li>
                    <p>
                      Ping the multicast addresses and note the responses. You
                      can perform this test whether you have the Cast-enabled
                      device's IP address or not. Ping the multicast IP
                      addresses as follows:
                    </p>
                    <ul>
                      <li>
                        <p class="code">
                          <code> ping 224.0.0.1</code>
                        </p>
                      </li>
                      <li>
                        <p class="code">
                          <code> ping 239.255.255.250</code>
                        </p>
                      </li>
                      <li>
                        <p class="code">
                          <code> ping 224.0.0.251M</code>
                        </p>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <p>
                      Find the IP address of the sender device. Usually the
                      Settings menu has this information. In Android, look in
                      Settings &#62; About &#62; Status.
                    </p>
                  </li>

                  <li>
                    <p>Ping the sender device and note the response.</p>

                    <p class="code">
                      <code>ping &#60;sender device IP address&#62;</code>
                    </p>
                  </li>
                </ol>

                <p>
                  If you can't get a response when you ping either device, see
                  Check the router.
                </p>
              </section>
              <section class="main-section" id="check_the_router">
                <header>Check the router</header>
                <p>
                  Some network routers support Cast better than others, and
                  Google has tested most of the major brands. The following
                  steps may help identify router issues.
                </p>
                <ol>
                  <li>
                    <p>On your network router, turn off AP isolation.</p>
                  </li>
                  <li>
                    <p>
                      Check your router for any known issues and additional
                      information.
                    </p>
                  </li>
                  <li>
                    <p>
                      Search the internet to see how other users have resolved
                      router issues with Chromecast.
                    </p>

                    <p>
                      For example, enter the query, "Chromecast Belkin n300."
                    </p>
                  </li>

                  <li>
                    <p>Update your router's firmware.</p>

                    <p>
                      See the manufacturer's instructions. The router firmware
                      may have bugs that can be resolved with a simple update.
                    </p>
                  </li>

                  <li>
                    <p>
                      Reboot your network router by turning it off then
                      restarting it.
                    </p>
                  </li>

                  <li>
                    <p>Reboot your Cast device.</p>

                    <p>
                      To reboot a Chromecast, unplug then replace the USB cable.
                      Similarly, for other Cast devices, turn on then turn off
                      the device to reboot it.
                    </p>
                  </li>
                </ol>
              </section>
              <section class="main-section" id="check_the_traffic">
                <header>Check the traffic</header>
                <p>
                  You can see if the Web Receiver is communicating properly with
                  the network by inspecting the broadcast services on the
                  network.
                </p>
                <ol>
                  <li>
                    <p>
                      On a device connected to the same network as the Web
                      Receiver device, install one of the network service
                      inspection utilities listed below.
                    </p>
                  </li>
                  <li>
                    <p>
                      Run the utility and find the
                      <strong>_googlecast._tcp.local</strong> service record.
                    </p>

                    <p>
                      This record will describe your Web Receiver device name
                      and model along with service data.
                    </p>
                  </li>

                  <li>
                    <p>
                      Copy the record information for communication to{" "}
                      <a href="https://developers.google.com/cast/docs/support">
                        Google Cast Support
                      </a>
                      .
                    </p>
                  </li>
                </ol>
                <p>
                  Install the network service inspection utilities as follows:
                </p>
                <ul>
                  <li>
                    <p>
                      Apple OSX - Install{" "}
                      <a
                        href="http://www.tildesoft.com/"
                        target="_blank"
                        rel=" noopener noreferrer"
                      >
                        Bonjour Browser from Tildesoft
                      </a>
                    </p>
                  </li>
                  <li>
                    <p>
                      Linux - Install avahi-discovery and run it as follows:
                    </p>
                  </li>
                  <ul>
                    <li>
                      <p class="code">
                        <code> sudo apt-get install avahi-discover</code>
                      </p>
                    </li>
                    <li>
                      <p class="code">
                        <code>sudo service avahi-daemon start</code>
                      </p>
                    </li>
                    <li>
                      <p class="code">
                        <code>avahi-discover</code>
                      </p>
                    </li>
                  </ul>
                </ul>
              </section>
              <hr />
              <footer>
                <p>
                  The content of this page is licensed under the Creative
                  Commons Attribution 4.0 License.
                </p>
              </footer>
            </main>
          </div>
        </div>
        <ContactLinks />
      </div>
    </>
  );
}

export default TechDoc;
