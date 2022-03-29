import * as util from 'minecraft-server-util';

export const pingServer = async (ip: string, port?: number | null) => {
  const _port = port || 25565;
  const options = {
    enableSRV: true,
    timeout: 1000 * 3,
  };

  // Try with util.status
  try {
    const {
      players: { online: players, max: maxPlayers },
    } = await util.status(ip, _port, options);

    return {
      players,
      maxPlayers,
    };
  } catch (err) {}

  // Try with util.statusLegacy
  try {
    const {
      players: { online: players, max: maxPlayers },
    } = await util.statusLegacy(ip, _port, options);

    return {
      players,
      maxPlayers,
    };
  } catch (err) {}

  // Try with util.statusBedrock
  try {
    const {
      players: { online: players, max: maxPlayers },
    } = await util.statusBedrock(ip, _port, options);

    return {
      players,
      maxPlayers,
    };
  } catch (err) {}

  return false;
};
